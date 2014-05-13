'use strict';

var IuguResource = require('../IuguResource');
var iuguMethod = IuguResource.method;

module.exports = IuguResource.extend({
    path: 'subscriptions',
    includeBasic: ['create', 'list', 'retrieve', 'update', 'del'],

    suspend: iuguMethod({
      method: 'POST',
      path: '{subscriptionId}/suspend',
      urlParams: ['subscriptionId']
    }),
    activate: iuguMethod({
      method: 'POST',
      path: '{subscriptionId}/activate',
      urlParams: ['subscriptionId']
    }),
    change_plan: iuguMethod({
      method: 'POST',
      path: '{subscriptionId}/change_plan/{plan_identifier}',
      urlParams: ['subscriptionId', 'plan_identifier']
    }),
    add_credits: iuguMethod({
      method: 'PUT',
      path: '{subscriptionId}/add_credits',
      urlParams: ['subscriptionId']
    }),
    remove_credits: iuguMethod({
      method: 'PUT',
      path: '{subscriptionId}/remove_credits',
      urlParams: ['subscriptionId']
    })
});
