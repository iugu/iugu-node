'use strict';

var resources = require('../../lib/iugu').resources;
var iugu = require('../testUtils').getSpyableIugu();
var expect = require('chai').expect;

var CUSTOMER_TEST_ID = 'customerIdTest999';

// Create new CustomerCard instance with pre-filled customerId:
var customerPaymentMethod = new resources.CustomerPaymentMethods(
  iugu,
  { customerId: CUSTOMER_TEST_ID }
);

// Use spy from existing resource:
customerPaymentMethod._request = iugu.customers._request;

describe('CustomerPaymentMethod Resource', function() {
/*
  describe('retrieve', function() {

    it('Sends the correct request', function() {

      customerPaymentMethod.retrieve('cardIdFoo456');
      expect(iugu.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/customers/' + CUSTOMER_TEST_ID + '/cards/cardIdFoo456',
        data: {}
      });

    });

  });

  describe('create', function() {

    it('Sends the correct request', function() {

      customerPaymentMethod.create({
        number: '123456', exp_month: '12'
      });
      expect(iugu.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/customers/' + CUSTOMER_TEST_ID + '/cards',
        data: { number: '123456', exp_month: '12' }
      });

    });

  });

  describe('update', function() {

    it('Sends the correct request', function() {

      customerPaymentMethod.update('cardIdFoo456', {
        name: 'Bob M. Baz'
      });
      expect(iugu.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/customers/' + CUSTOMER_TEST_ID + '/cards/cardIdFoo456',
        data: { name: 'Bob M. Baz' }
      });

    });

  });

  describe('del', function() {

    it('Sends the correct request', function() {

      customerPaymentMethod.del('cardIdFoo456');
      expect(iugu.LAST_REQUEST).to.deep.equal({
        method: 'DELETE',
        url: '/v1/customers/' + CUSTOMER_TEST_ID + '/cards/cardIdFoo456',
        data: {}
      });

    });

  });

  describe('list', function() {

    it('Sends the correct request', function() {

      customerPaymentMethod.list();
      expect(iugu.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/customers/' + CUSTOMER_TEST_ID + '/cards',
        data: {}
      });

    });

  });
*/
});
