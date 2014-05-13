'use strict';

var IuguResource = require('../IuguResource');
var iuguMethod = IuguResource.method;

module.exports = IuguResource.extend({
  path: 'customers',
  includeBasic: [
    'create', 'list', 'retrieve', 'update', 'del'
  ],
  
  /**
   * Customer: PaymentMethods methods
   */

  createPaymentMethod: iuguMethod({
    method: 'POST',
    path: '/{customerId}/payment_methods',
    urlParams: ['customerId']
  }),

  listPaymentMethod: iuguMethod({
    method: 'GET',
    path: '/{customerId}/payment_methods',
    urlParams: ['customerId']
  }),

  retrievePaymentMethod: iuguMethod({
    method: 'GET',
    path: '/{customerId}/payment_methods/{paymentMethodId}',
    urlParams: ['customerId', 'paymentMethodId']
  }),

  updatePaymentMethod: iuguMethod({
    method: 'POST',
    path: '/{customerId}/payment_methods/{paymentMethodId}',
    urlParams: ['customerId', 'paymentMethodId']
  }),

  deletePaymentMethod: iuguMethod({
    method: 'DELETE',
    path: '/{customerId}/payment_methods/{paymentMethodId}',
    urlParams: ['customerId', 'paymentMethodId']
  }),

});
