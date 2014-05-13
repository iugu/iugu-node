'use strict';

var iugu = require('../testUtils').getSpyableIugu();
var expect = require('chai').expect;

describe('Plans Resource', function() {

  describe('retrieve', function() {

    it('Sends the correct request', function() {

      iugu.plans.retrieve('planId1');
      expect(iugu.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/plans/planId1',
        data: {}
      });

    });

  });

  describe('create', function() {

    it('Sends the correct request', function() {

      iugu.plans.create({
        amount: 200, currency: 'usd'
      });
      expect(iugu.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/plans',
        data: { amount: 200, currency: 'usd' }
      });

    });

  });

  describe('update', function() {

    it('Sends the correct request', function() {

      iugu.plans.update('planId3', {
        amount: 1900, currency: 'usd'
      });
      expect(iugu.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/plans/planId3',
        data: { amount: 1900, currency: 'usd' }
      });

    });

  });

  describe('del', function() {

    it('Sends the correct request', function() {

      iugu.plans.del('planId4');
      expect(iugu.LAST_REQUEST).to.deep.equal({
        method: 'DELETE',
        url: '/v1/plans/planId4',
        data: {}
      });

    });

  });

  describe('list', function() {

    it('Sends the correct request', function() {

      iugu.plans.list();
      expect(iugu.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/plans',
        data: {}
      });

    });

  });

});
