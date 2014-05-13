'use strict';

var iuguMethod = require('./IuguMethod');
var utils = require('./utils');

module.exports = {

  create: iuguMethod({
    method: 'POST'
  }),

  list: iuguMethod({
    method: 'GET'
  }),

  retrieve: iuguMethod({
    method: 'GET',
    path: '/{id}',
    urlParams: ['id']
  }),

  update: iuguMethod({
    method: 'POST',
    path: '{id}',
    urlParams: ['id']
  }),

  // Avoid 'delete' keyword in JS
  del: iuguMethod({
    method: 'DELETE',
    path: '{id}',
    urlParams: ['id']
  })

};