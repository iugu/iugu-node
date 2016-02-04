'use strict';

var iugu = require('../testUtils').getSpyableIugu();
var expect = require('chai').expect;

describe('Transfers Resource', function() {

    describe('list', function() {

        it('Sends the correct request', function() {

            iugu.withDrawRequests.list();
            expect(iugu.LAST_REQUEST).to.deep.equal({
                method: 'GET',
                url: '/v1/withdraw_requests',
                data: {}
            });

        });

    });

});
