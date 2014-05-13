'use strict';

require('./testUtils');

var Error = require('../lib/Error');
var expect = require('chai').expect;

describe('Error', function() {

  it('Populates with type and message params', function() {
    var e = new Error('FooError', 'Foo happened');
    expect(e).to.have.property('type', 'FooError');
    expect(e).to.have.property('message', 'Foo happened');
  });

  describe('IuguError', function() {
    it('Generates specific instance depending on error-type', function() {
      expect(Error.IuguError.generate({ type: 'card_error' })).to.be.instanceOf(Error.IuguCardError);
      expect(Error.IuguError.generate({ type: 'invalid_request_error' })).to.be.instanceOf(Error.IuguInvalidRequestError);
      expect(Error.IuguError.generate({ type: 'api_error' })).to.be.instanceOf(Error.IuguAPIError);
    });
  });

});