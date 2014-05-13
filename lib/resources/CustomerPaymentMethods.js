'use strict';

var IuguResource = require('../IuguResource');

/**
 * CustomerPaymentMethods is a unique resource in that, upon instantiation,
 * requires a customerId, and therefore each of its methods only
 * require the paymentMethodId argument.
 *
 * This streamlines the API specifically for the case of accessing Payment Methods
 * on a returned customer object.
 *
 * E.g. customerObject.paymentMethods.retrieve(paymentMethodId)
 * (As opposed to the also-supported iugu.Customer.retrieveCard(custId, paymentMethodId))
 */
module.exports = IuguResource.extend({
  path: 'customers/{customerId}/payment_methods',
  includeBasic: ['create', 'list', 'retrieve', 'update', 'del']
});
