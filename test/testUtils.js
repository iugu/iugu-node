'use strict';

// NOTE: testUtils should be require'd before anything else in each spec file!

// Ensure we are using the 'as promised' libs before any tests are run:
require('mocha-as-promised')();
require('chai').use(require('chai-as-promised'));

var when = require('when');

var utils = module.exports = {

  getUserIuguKey: function() {
    var key = process.env.IUGU_TEST_API_KEY || '4bef97b6b36bc0b2c569470b6de9256e';

    return key;
  },

  getSpyableIugu: function() {
    // Provide a testable iugu instance
    // That is, with mock-requests built in and hookable

    var Iugu = require('../lib/iugu');
    var iuguInstance = Iugu('fakeAuthToken');

    iuguInstance.REQUESTS = [];

    for (var i in iuguInstance) {
      if (iuguInstance[i] instanceof Iugu.IuguResource) {

        // Override each _request method so we can make the params
        // avaialable to consuming tests (revealing requests made on
        // REQUESTS and LAST_REQUEST):
        iuguInstance[i]._request = function(method, url, data, auth, cb) {
          var req = iuguInstance.LAST_REQUEST = {
            method: method,
            url: url,
            data: data
          };
          if (auth) req.auth = auth;
          iuguInstance.REQUESTS.push(req);
          cb.call(this, null, {});
        };

      }
    }

    return iuguInstance;

  },

  /**
   * A utility where cleanup functions can be registered to be called post-spec.
   * CleanupUtility will automatically register on the mocha afterEach hook,
   * ensuring its called after each descendent-describe block.
   */
  CleanupUtility: (function() {

    CleanupUtility.DEFAULT_TIMEOUT = 20000;

    function CleanupUtility(timeout) {
      var self = this;
      this._cleanupFns = [];
      this._iugu = require('../lib/iugu')(
        utils.getUserIuguKey(),
        'latest'
      );
      afterEach(function(done) {
        this.timeout(timeout || CleanupUtility.DEFAULT_TIMEOUT);
        return self.doCleanup(done);
      });
    }

    CleanupUtility.prototype = {

      doCleanup: function(done) {
        console.log('call**************************');
        var cleanups = this._cleanupFns;
        var total = cleanups.length;
        var completed = 0;
        for (var fn; fn = cleanups.shift();) {
          var promise = fn.call(this);
          if (!promise || !promise.then) {
            throw new Error('CleanupUtility expects cleanup functions to return promises!');
          }
          promise.then(function() {
            // cleanup successful
            ++completed;
            if (completed === total) {
              done();
            }
          }, function(err) {
            // not successful
            throw err;
          });
        }
        if (total === 0) done();
      },
      add: function(fn) {
        this._cleanupFns.push(fn);
      },
      deleteSubscription: function(subscriptionId) {
        console.log('call+++++++++++++++++++++++');
        this.add(function() {
          return this._iugu.subscriptions.del(subscriptionId);
        });
      },
      deleteInvoice: function(invoiceId) {
        console.log('call+++++++++++++++++++++++');
        this.add(function() {
          return this._iugu.invoice.del(invoiceId);
        });
      },
      deleteCustomer: function(custId) {
        console.log('call+++++++++++++++++++++++');
        this.add(function() {
          return this._iugu.customers.del(custId);
        });
      },
      deletePlan: function(pId) {
        console.log('call+++++++++++++++++++++++');
        this.add(function() {
          return this._iugu.plans.del(pId);
        });
      }     
    };

    return CleanupUtility;

  }())

};



