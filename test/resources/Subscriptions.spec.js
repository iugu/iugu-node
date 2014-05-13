'use strict';

var iugu = require('../testUtils').getSpyableIugu();
var expect = require('chai').expect;

describe('Subscriptions Resource', function() {

  describe('retrieve', function() {

    it('Sends the correct request', function() {

      iugu.subscriptions.retrieve('planId1');
      expect(iugu.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/subscriptions/planId1',
        data: {}
      });

    });

  });

  describe('create', function() {

    it('Sends the correct request', function() {

      iugu.subscriptions.create({
        amount: 200, currency: 'usd'
      });
      expect(iugu.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/subscriptions',
        data: { amount: 200, currency: 'usd' }
      });

    });

  });

  describe('update', function() {

    it('Sends the correct request', function() {

      iugu.subscriptions.update('planId3', {
        amount: 1900, currency: 'usd'
      });
      expect(iugu.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/subscriptions/planId3',
        data: { amount: 1900, currency: 'usd' }
      });

    });

  });

  describe('del', function() {

    it('Sends the correct request', function() {

      iugu.subscriptions.del('planId4');
      expect(iugu.LAST_REQUEST).to.deep.equal({
        method: 'DELETE',
        url: '/v1/subscriptions/planId4',
        data: {}
      });

    });

  });

  describe('list', function() {

    it('Sends the correct request', function() {

      iugu.subscriptions.list();
      expect(iugu.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/subscriptions',
        data: {}
      });

    });

  });

});
