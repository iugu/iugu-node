'use strict';

var testUtils = require('./testUtils');
var chai = require('chai');
var when = require('when');
var iugu = require('../lib/iugu')(
  testUtils.getUserIuguKey(),
  'latest'
);

var expect = chai.expect;

var CUSTOMER_DATA = {
  'email': 'email@email.com',
  'name': 'Nome do Cliente',
  'notes': 'Anotações Gerais'
};

var PLAN_DATA = {
  'name': 'Plano Básico',
  'identifier': 'basic_plan',
  'interval': '1',
  'interval_type': 'months',
  'prices': [{ "currency" :'BRL',
    "value_cents" : '1000'
  }],
  'features[][name]': 'Número de Usuários',
  'features[][identifier]': 'users',
  'features[][value]': '10'
}

var SUBSCRIPTION_DATA = {
  'plan_identifier': 'basic_plan',
  'customer_id': '',
  'only_on_charge_success': 'false',
  'subitems[][description]': 'Item um',
  'subitems[][price_cents]': '1000', 
  'subitems[][quantity]': '1'
}

var PAYMENT_METHOD_DATA = {
  'description': 'Meu Cartão de Crédito',
  'item_type': 'credit_card',
  'data[number]': '4111111111111111',
  'data[verification_value]': '123',
  'data[first_name]': 'Joao',
  'data[last_name]': 'Silva',
  'data[month]': '12',
  'data[year]': '2015'
};

describe('Flows', function() {

  // Note: These tests must be run as one so we can retrieve the
  // default_currency (required in subsequent tests);

  var cleanup = new testUtils.CleanupUtility();
  this.timeout(6000);
  
  describe('Plan+Subscription flow', function() {

    it('Allows me to: Create a plan and subscribe a customer to it', function() {
      return expect(
        when.join(iugu.plans.create(PLAN_DATA),
          iugu.customers.create(CUSTOMER_DATA)
        ).then(function(j) {

          var plan = j[0].body;
          var customer = j[1].body;
          SUBSCRIPTION_DATA.customer_id = customer.id;

          //cleanup.deleteCustomer(customer.id);
          //cleanup.deletePlan(plan.id);
          return iugu.customers.createPaymentMethod(customer.id, PAYMENT_METHOD_DATA);
        }).then(function(paymentMethod) {
          return iugu.subscriptions.create(SUBSCRIPTION_DATA);
        }).then(function(subscription) {
          //cleanup.deleteInvoice(subscription.body.recent_invoices[0].id);
          //cleanup.deleteSubscription(subscription.body.id);

          return [subscription.body.suspended, subscription.body.currency];
        })
      ).to.eventually.deep.equal([false, 'BRL']);

    });
    it('Allows me to: Create a plan and subscribe a customer to it using bankslip', function() {
      return expect(
        when.join(
          iugu.customers.create(CUSTOMER_DATA)
        ).then(function(j) {

          var plan = j[0].body;
          var customer = j[1]?j[1].body:j[1];
          SUBSCRIPTION_DATA.customer_id = plan.id;
          SUBSCRIPTION_DATA.plan_identifier = 'basic_plan';
          SUBSCRIPTION_DATA.credits_based = false;
          //cleanup.deleteCustomer(customer.id);
          //cleanup.deletePlan(plan.id);

          return iugu.subscriptions.create(SUBSCRIPTION_DATA);
        }).then(function(subscription) {
          //cleanup.deleteInvoice(subscription.recent_invoices[0].id);
          //cleanup.deleteSubscription(subscription.id);
          SUBSCRIPTION_DATA.credits_cycle = '1000';
          SUBSCRIPTION_DATA.price_cents = '5000';
          SUBSCRIPTION_DATA.credits_based = false;
          return iugu.subscriptions.create(SUBSCRIPTION_DATA);
        }).then(function(subscription) {
          //cleanup.deleteInvoice(subscription.recent_invoices[0].id);
          //cleanup.deleteSubscription(subscription.id);

          return [subscription.body.suspended, subscription.body.currency];
        })
      ).to.eventually.deep.equal([false, 'BRL']);

    });
/*
    it('Allows me to: Create a plan and subscribe a customer to it, and update subscription (multi-subs API)', function() {
      var plan;
      return expect(
        when.join(
          iugu.plans.create({
            id: 'plan' + +new Date,
            amount: 1700,
            currency: CURRENCY,
            interval: 'month',
            name: 'Gold Super Amazing Tier'
          }),
          iugu.customers.create(CUSTOMER_DETAILS)
        ).then(function(j) {

          plan = j[0];
          var customer = j[1];

          cleanup.deleteCustomer(customer.id);
          cleanup.deletePlan(plan.id);

          return iugu.customers.createSubscription(customer.id, {
            plan: plan.id
          });

        }).then(function(subscription) {
          return iugu.customers.updateSubscription(subscription.customer, subscription.id, {
            plan: plan.id, quantity: '3'
          });
        }).then(function(subscription) {
          return [subscription.status, subscription.quantity];
        })
      ).to.eventually.deep.equal(['active', 3]);

    });

    it('Errors when I attempt to subscribe a customer to a non-existent plan', function() {

      return expect(
        iugu.customers.create(CUSTOMER_DETAILS)
          .then(function(customer) {

            cleanup.deleteCustomer(customer.id);

            return iugu.customers.updateSubscription(customer.id, {
              plan: 'someNonExistentPlan' + +new Date
            }).then(null, function(err) {
              // Resolve with the error so we can inspect it below
              return err;
            });

          })
      ).to.eventually.satisfy(function(err) {
        return err.type === 'StripeInvalidRequest' &&
          err.rawType === 'invalid_request_error';
      });

    });

    it('Allows me to: subscribe then cancel with `at_period_end` defined', function() {

      return expect(
        when.join(
          iugu.plans.create({
            id: 'plan' + +new Date,
            amount: 1700,
            currency: CURRENCY,
            interval: 'month',
            name: 'Silver Super Amazing Tier'
          }),
          iugu.customers.create(CUSTOMER_DETAILS)
        ).then(function(j) {

          var plan = j[0];
          var customer = j[1];

          cleanup.deleteCustomer(customer.id);
          cleanup.deletePlan(plan.id);

          return iugu.customers.updateSubscription(customer.id, {
            plan: plan.id
          });

        }).then(function(subscription) {
          return iugu.customers.cancelSubscription(subscription.customer, {
            at_period_end: true
          });
        })
      ).to.eventually.have.property('cancel_at_period_end', true);
*/
    });
/*
    describe('Plan name variations', function() {
      [
        '34535 355453' + +new Date,
        'TEST 239291' + +new Date,
        'TEST_a-i' + +new Date,
        'foobarbazteston###etwothree' + +new Date
      ].forEach(function(planID) {
        it('Allows me to create and retrieve plan with ID: ' + planID, function() {
          var plan;
          return expect(
            iugu.plans.create({
              id: planID,
              amount: 1700,
              currency: CURRENCY,
              interval: 'month',
              name: 'generic'
            }).then(function() {
              cleanup.deletePlan(planID);
              return iugu.plans.retrieve(planID);
            })
          ).to.eventually.have.property('id', planID);
        });
      });
    });

  });

  describe('Charge', function() {
    it('Allows you to create a charge', function() {
      return expect(
        iugu.charges.create({
          amount: 1234,
          currency: CURRENCY,
          card: {
            number: '4000000000000002',
            exp_month: 12,
            exp_year: 2020,
            cvc: 123
          }
        }).then(null, function(error) {
          return error;
        })
      ).to.eventually.have.deep.property('raw.charge');
    });
  });


*/
});
