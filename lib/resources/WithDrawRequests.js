'use strict';

var IuguResource = require('../IuguResource');
var iuguMethod = IuguResource.method;

module.exports = IuguResource.extend({

  path: 'withdraw_requests',
  includeBasic: [
    'list'
  ]
});

