'use strict';

var iugu = require('../testUtils').getSpyableIugu();
var expect = require('chai').expect;

describe('MarketPlace Resource', function() {

  describe('create', function() {

    it('Sends the correct request', function() {
      var subconta_data = {
        'name': 'Subconta',
        'commission_percent': '10'
      }

      iugu.marketPlace.create_account(subconta_data);
      expect(iugu.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/marketplace/create_account',
        data: subconta_data
      });

    });

  });

});
