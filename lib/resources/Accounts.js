'use strict';

var IuguResource = require('../IuguResource');
var iuguMethod = IuguResource.method;

module.exports = IuguResource.extend({

  path: 'accounts',
  includeBasic: ['retrieve'],
  
  request_verification: iuguMethod({
    method: 'POST',
    path: '{accountId}/request_verification',
    urlParams: ['accountId']
  })

});
