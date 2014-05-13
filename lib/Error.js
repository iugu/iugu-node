'use strict';

var utils = require('./utils');

module.exports = _Error;

/**
 * Generic Error class to wrap any errors returned by iugu-node
 */
function _Error(raw) {
  this.populate.apply(this, arguments);
}

// Extend Native Error
_Error.prototype = Object.create(Error.prototype);

_Error.prototype.type = 'GenericError';
_Error.prototype.populate = function(type, message) {
  this.type = type;
  this.message = message;
};

_Error.extend = utils.protoExtend;

/**
 * Create subclass of internal Error class
 * (Specifically for errors returned from Iugu's REST API)
 */
var IuguError = _Error.IuguError = _Error.extend({
  type: 'IuguError',
  populate: function(raw) {

    // Move from prototype def (so it appears in stringified obj)
    this.type = this.type;

    this.rawType = raw.type;
    this.code = raw.code;
    this.param = raw.param;
    this.message = raw.message;
    this.detail = raw.detail;
    this.raw = raw;

  }
});

/**
 * Helper factory which takes raw iugu errors and outputs wrapping instances
 */
IuguError.generate = function(rawIuguError) {
  switch (rawIuguError.type) {
    case 'card_error':
      return new _Error.IuguCardError(rawIuguError);
    case 'invalid_request_error':
      return new _Error.IuguInvalidRequestError(rawIuguError);
    case 'api_error':
      return new _Error.IuguAPIError(rawIuguError);
  }
  return new _Error('Generic', 'Unknown Error');
};

// Specific Stripe Error types:
_Error.IuguCardError = IuguError.extend({ type: 'IuguCardError' });
_Error.IuguInvalidRequestError = IuguError.extend({ type: 'IuguInvalidRequest' });
_Error.IuguAPIError = IuguError.extend({ type: 'IuguAPIError' });
_Error.IuguAuthenticationError = IuguError.extend({ type: 'IuguAuthenticationError' });
_Error.IuguConnectionError = IuguError.extend({ type: 'IuguConnectionError' });
