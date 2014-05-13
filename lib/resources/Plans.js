'use strict';
var IuguResource = require('../IuguResource');
var iuguMethod = IuguResource.method;

module.exports = IuguResource.extend({
  path: 'plans',
  includeBasic: ['create', 'list', 'retrieve', 'update', 'del'],
  
  retrieveByIdentifier: iuguMethod({
    method: 'GET',
    path: 'identifier/{identifier}/',
    urlParams: ['identifier']
  })
});

