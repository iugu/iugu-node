'use strict';

var IuguResource = require('../IuguResource');
var iuguMethod = IuguResource.method;

module.exports = IuguResource.extend({

  path: 'invoices',
  includeBasic: ['create', 'list', 'retrieve', 'update', 'del'],

  cancel: iuguMethod({
    method: 'PUT',
    path: '{invoiceId}/cancel',
    urlParams: ['invoiceId']
  }),

  refund : iuguMethod({
    method: 'POST',
    path: '{invoiceId}/refund',
    urlParams: ['invoiceId']
  }),

});
