'use strict';

var iugu = require('../testUtils').getSpyableIugu();
var expect = require('chai').expect;

describe('Account Resource', function() {

  describe('retrieve', function() {

    it('Sends the correct request', function() {
      /*
      iugu.accounts.retrieve('4bef97b6b36bc0b2c569470b6de9256e');
      expect(iugu.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/accounts',
        data: {}
      });
    */
    });

  });
  
  describe('request verification', function() {

    it('Sends the correct request', function() {
      var data_reqverification = {
        'data[price_range]': 'Subconta', 
        'data[physical_products]': 'false',
        'data[business_type]': 'Serviços de Limpeza',
        'data[person_type]': 'Pessoa Física',
        'data[automatic_transfer]': 'true', 
        'data[cpf]': '123.123.123-12',
        'data[name]': 'Nome da Pessoa',
        'data[address]': 'Av. Paulista 320 cj 10', 
        'data[cep]': '01419-000',
        'data[city]': 'São Paulo', 
        'data[state]': 'São Paulo', 
        'data[telephone]': '11-91231-1234', 
        'data[bank]': 'Itaú', 
        'data[bank_ag]': '1234',
        'data[account_type]': 'Corrente',
        'data[bank_cc]': '11231-2',
        'files[id]': '@/home/user1/Desktop/rg.png',
        'files[cpf]': '@/home/user1/Desktop/cpf.png',   
        'files[activity]': '@/home/user1/Desktop/contrato.png'
      }
      /*
      iugu.accounts.request_verification(data_reqverification);
      expect(iugu.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/account',
        data: {}
      });
      */
    });

  });

  describe('request withdraw', function(){
    it('Sends the correct request', function(){
      var withdraw = {
        'amount': '13050'
      }
      , accountId = '4bef97b6b36bc0b2c569470b6de9256e';

      iugu.accounts.request_withdraw(accountId, withdraw);
      expect(iugu.LAST_REQUEST).to.deep.equal({
        method: 'POST'
        , url: 'v1/accounts/' + accountId + '/request_withdraw'
      });
    });
  });
});