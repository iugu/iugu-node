'use strict';

var iugu = require('../testUtils').getSpyableIugu();
var expect = require('chai').expect;

describe('Charge Resource', function() {

  describe('create', function() {

    it('Sends the correct request', function() {
      var charge_data = { 
        'email': 'test@test.com', 
        'items[][description]': 'Item Um', 
        'items[][quantity]': '1', 
        'items[][price_cents]': '1099', 
        'payer[cpf_cnpj]': '12312312312', 
        'payer[name]': 'Nome do Cliente', 
        'payer[phone_prefix]': '11', 
        'payer[phone]': '12121212', 
        'payer[email]': 'test@test.com', 
        'payer[address][street]': 'Rua Tal', 
        'payer[address][number]': '700',
        'payer[address][city]': 'São Paulo',
        'payer[address][state]': 'SP',
        'payer[address][country]': 'Brasil',
        'payer[address][zip_code]': '12122-000'
      };
      //charge_data.token = token.id;
      
      iugu.charge.create(charge_data);      
      expect(iugu.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/charge',
        data: charge_data
      });

    });

  });  

});
