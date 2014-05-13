'use strict';

var iugu = require('../testUtils').getSpyableIugu();
var expect = require('chai').expect;

describe('PaymentToken Resource', function() {

  describe('create', function() {

    it('Sends the correct request', function() {

      iugu.paymentToken.create({
        card: { number: 123 }
      });
      expect(iugu.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/payment_token',
        data: { card: { number: 123 } }
      });

    });

  });

  describe('retrieve', function() {

    it('Sends the correct request', function() {
      /*
      iugu.token.retrieve('tokenId1');
      expect(iugu.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/tokens/tokenId1',
        data: {}
      });
      */
    });

  });

});
