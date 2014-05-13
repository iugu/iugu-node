'use strict';

var iugu = require('../testUtils').getSpyableIugu();
var expect = require('chai').expect;
var when = require('when');

var TEST_AUTH_KEY = 'aGN0bIwXnHdw5645VABjPdSn8nWY7G11';

describe('Customers Resource', function() {

  describe('retrieve', function() {

    it('Sends the correct request', function() {

      iugu.customers.retrieve('cus_2dkAb792h1mfa4');
      expect(iugu.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/customers/cus_2dkAb792h1mfa4',
        data: {}
      });

    });

    it('Sends the correct request [with specified auth]', function() {

      iugu.customers.retrieve('cus_2dkAb792h1mfa4', TEST_AUTH_KEY);
      expect(iugu.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/customers/cus_2dkAb792h1mfa4',
        data: {},
        auth: TEST_AUTH_KEY
      });

    });

  });

  describe('create', function() {

    it('Sends the correct request', function() {

      iugu.customers.create({ description: 'Some customer' });
      expect(iugu.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/customers',
        data: { description: 'Some customer' }
      });

    });

    it('Sends the correct request [with specified auth]', function() {

      iugu.customers.create({ description: 'Some customer' }, TEST_AUTH_KEY);
      expect(iugu.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/customers',
        data: { description: 'Some customer' },
        auth: TEST_AUTH_KEY
      });

    });

  });

  describe('update', function() {

    it('Sends the correct request', function() {

      iugu.customers.update('cus_2dkAb792h1mfa4', {
        description: 'Foo "baz"'
      });
      expect(iugu.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/customers/cus_2dkAb792h1mfa4',
        data: { description: 'Foo "baz"' }
      });

    });

  });

  describe('del', function() {

    it('Sends the correct request', function() {

      iugu.customers.del('cus_2dkAb792h1mfa4');
      expect(iugu.LAST_REQUEST).to.deep.equal({
        method: 'DELETE',
        url: '/v1/customers/cus_2dkAb792h1mfa4',
        data: {}
      });

    });

  });

  describe('list', function() {

    it('Sends the correct request', function() {

      iugu.customers.list();
      expect(iugu.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/customers',
        data: {}
      });

    });

    it('Sends the correct request [with specified auth]', function() {

      iugu.customers.list(TEST_AUTH_KEY);
      expect(iugu.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/customers',
        data: {},
        auth: TEST_AUTH_KEY
      });

    });

  });
/*
  describe('Payment methods', function() {

    describe('retrieveCard', function() {

      it('Sends the correct request', function() {

        iugu.customers.retrieveCard('customerIdFoo321', 'cardIdFoo456');
        expect(iugu.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/customers/customerIdFoo321/cards/cardIdFoo456',
          data: {}
        });

      });

      it('Sends the correct request [with specified auth]', function() {

        iugu.customers.retrieveCard('customerIdFoo321', 'cardIdFoo456', TEST_AUTH_KEY);
        expect(iugu.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/customers/customerIdFoo321/cards/cardIdFoo456',
          data: {},
          auth: TEST_AUTH_KEY
        });

      });

    });

    describe('createCard', function() {

      it('Sends the correct request', function() {

        iugu.customers.createCard('customerIdFoo321', {
          number: '123456', exp_month: '12'
        });
        expect(iugu.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/customers/customerIdFoo321/cards',
          data: { number: '123456', exp_month: '12' }
        });

      });

      it('Sends the correct request [with specified auth]', function() {

        iugu.customers.createCard('customerIdFoo321', {
          number: '123456', exp_month: '12'
        }, TEST_AUTH_KEY);
        expect(iugu.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/customers/customerIdFoo321/cards',
          data: { number: '123456', exp_month: '12' },
          auth: TEST_AUTH_KEY
        });

      });

    });

    describe('updateCard', function() {

      it('Sends the correct request', function() {

        iugu.customers.updateCard('customerIdFoo321', 'cardIdFoo456', {
          name: 'Bob M. Baz'
        });
        expect(iugu.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/customers/customerIdFoo321/cards/cardIdFoo456',
          data: { name: 'Bob M. Baz' }
        });

      });

    });

    describe('deleteCard', function() {

      it('Sends the correct request', function() {

        iugu.customers.deleteCard('customerIdFoo321', 'cardIdFoo456');
        expect(iugu.LAST_REQUEST).to.deep.equal({
          method: 'DELETE',
          url: '/v1/customers/customerIdFoo321/cards/cardIdFoo456',
          data: {}
        });

      });

      it('Sends the correct request [with specified auth]', function() {

        iugu.customers.deleteCard('customerIdFoo321', 'cardIdFoo456', TEST_AUTH_KEY);
        expect(iugu.LAST_REQUEST).to.deep.equal({
          method: 'DELETE',
          url: '/v1/customers/customerIdFoo321/cards/cardIdFoo456',
          data: {},
          auth: TEST_AUTH_KEY
        });

      });

    });

    describe('listCards', function() {

      it('Sends the correct request', function() {

        iugu.customers.listCards('customerIdFoo321');
        expect(iugu.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/customers/customerIdFoo321/cards',
          data: {}
        });

      });

      it('Sends the correct request [with specified auth]', function() {

        iugu.customers.listCards('customerIdFoo321', TEST_AUTH_KEY);
        expect(iugu.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/customers/customerIdFoo321/cards',
          data: {},
          auth: TEST_AUTH_KEY
        });

      });

    });

  });
*/
});