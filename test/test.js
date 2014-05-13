'use strict';

var iugu = require('../lib/iugu')(
  '4bef97b6b36bc0b2c569470b6de9256e',
  'latest'
);
/*
console.log('test.js');
iugu.token.create(
  {
    'account_id': '0738d949-27cf-493b-b079-abf045d13e12', 
    'test': true,
    'method': 'credit_card',
    'data[number]': '4111111111111111',
    'data[verification_value]':'123',
    'data[first_name]': 'Joao',
    'data[last_name]': 'Silva',
    'data[month]': '12',
    'data[year]': '2014'
  }, function(err, token) {
  console.log(err);
  console.log(token);
    var data = { 
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
    data.token = token.id;
    iugu.charge.create(data, function(err, res) {
      console.log(err);
      console.log(res);
    });
});

*/