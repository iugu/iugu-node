'use strict';

var iugu = require('../testUtils').getSpyableIugu();
var expect = require('chai').expect;

describe('Invoices Resource', function() {

  describe('retrieve', function() {

    it('Sends the correct request', function() {

      iugu.invoices.retrieve('invoiceId1');
      expect(iugu.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/invoices/invoiceId1',
        data: {}
      });

    });

  });

  describe('create', function() {

    it('Sends the correct request', function() {

      iugu.invoices.create({ application_fee: 111 });
      expect(iugu.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/invoices',
        data: { application_fee: 111 }
      });

    });

  });

  describe('update', function() {

    it('Sends the correct request', function() {

      iugu.invoices.update('invoiceId1', { application_fee: 200 });
      expect(iugu.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/invoices/invoiceId1',
        data: { application_fee: 200 }
      });

    });

  });

  describe('list', function() {

    it('Sends the correct request', function() {

      iugu.invoices.list({ count: 25 });
      expect(iugu.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/invoices',
        data: { count: 25 }
      });

    });

  });

});