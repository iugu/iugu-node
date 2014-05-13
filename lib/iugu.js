'use strict';

Iugu.DEFAULT_HOST = 'api.iugu.com';
Iugu.DEFAULT_PORT = '443';
Iugu.DEFAULT_BASE_PATH = '/v1/';
Iugu.DEFAULT_API_VERSION = null;

// Use node's default timeout:
Iugu.DEFAULT_TIMEOUT = require('http').createServer().timeout;

Iugu.PACKAGE_VERSION = require('../package.json').version;

Iugu.USER_AGENT = {
  bindings_version: Iugu.PACKAGE_VERSION,
  lang: 'node',
  lang_version: process.version,
  platform: process.platform,
  publisher: 'iugu',
  uname: null
};

Iugu.USER_AGENT_SERIALIZED = null;

var exec = require('child_process').exec;

var resources = {
  Accounts: require('./resources/Accounts'),
  Charge: require('./resources/Charge'),
  Customers: require('./resources/Customers'),
  Invoices: require('./resources/Invoices'),
  MarketPlace: require('./resources/MarketPlace'),
  Plans: require('./resources/Plans'),
  Subscriptions: require('./resources/Subscriptions'),
  PaymentToken: require('./resources/PaymentToken'),
  Transfers: require('./resources/Transfers'),

  // The following rely on pre-filled customer IDs:
  CustomerPaymentMethods: require('./resources/CustomerPaymentMethods'),
  
};

Iugu.IuguResource = require('./IuguResource');
Iugu.resources = resources;

function Iugu(key, version) {

  if (!(this instanceof Iugu)) {
    return new Iugu(key, version);
  }

  this._api = {
    auth: null,
    host: Iugu.DEFAULT_HOST,
    port: Iugu.DEFAULT_PORT,
    basePath: Iugu.DEFAULT_BASE_PATH,
    version: Iugu.DEFAULT_API_VERSION,
    timeout: Iugu.DEFAULT_TIMEOUT,
    dev: false
  };

  this._prepResources();
  this.setApiKey(key);
  this.setApiVersion(version);
}

Iugu.prototype = {

  setHost: function(host, port, protocol) {
    this._setApiField('host', host);
    if (port) this.setPort(port);
    if (protocol) this.setProtocol(protocol);
  },

  setProtocol: function(protocol) {
    this._setApiField('protocol', protocol.toLowerCase());
  },

  setPort: function(port) {
    this._setApiField('port', port);
  },

  setApiVersion: function(version) {
    if (version) {
      this._setApiField('version', version);
    }
  },

  setApiKey: function(key) {
    if (key) {
      this._setApiField(
        'auth',
        'Basic ' + new Buffer(key + ':').toString('base64')
      );
    }
  },

  setTimeout: function(timeout) {
    this._setApiField(
      'timeout',
      timeout == null ? Iugu.DEFAULT_TIMEOUT : timeout
    );
  },

  _setApiField: function(key, value) {
    this._api[key] = value;
  },

  getApiField: function(key) {
    return this._api[key];
  },

  getConstant: function(c) {
    return Iugu[c];
  },

  getClientUserAgent: function(cb) {
    if (Iugu.USER_AGENT_SERIALIZED) {
      return cb(Iugu.USER_AGENT_SERIALIZED);
    }
    exec('uname -a', function(err, uname) {
      Iugu.USER_AGENT.uname = uname || 'UNKNOWN';
      Iugu.USER_AGENT_SERIALIZED = JSON.stringify(Iugu.USER_AGENT);
      cb(Iugu.USER_AGENT_SERIALIZED);
    });
  },

  _prepResources: function() {

    for (var name in resources) {
      this[
        name[0].toLowerCase() + name.substring(1)
      ] = new resources[name](this);
    }

  }

};

module.exports = Iugu;
