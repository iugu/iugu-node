'use strict';

var iugu = require('../testUtils').getSpyableIugu();
var expect = require('chai').expect;

describe('Transfers Resource', function() {

  describe('retrieve', function() {

    it('Sends the correct request', function() {
      /*
      iugu.transfers.retrieve('transferId1');
      expect(iugu.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/transfers/transferId1',
        data: {}
      });
      */
    });

  });

  describe('create', function() {

    it('Sends the correct request', function() {

      iugu.transfers.create({
        amount: 200, currency: 'usd', recipient: {}
      });
      expect(iugu.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/transfers',
        data: { amount: 200, currency: 'usd', recipient: {} }
      });

    });

  });

  describe('list', function() {

    it('Sends the correct request', function() {

      iugu.transfers.list();
      expect(iugu.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/transfers',
        data: {}
      });

    });

  });

});
