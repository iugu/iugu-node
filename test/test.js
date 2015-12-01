'use strict';

var iugu = require('../lib/iugu')(
  'fa484a7c14ff046c6f1c589d2f0c389b',
  'latest'
);


iugu.setApiKey('fa484a7c14ff046c6f1c589d2f0c389b');


var CUSTOMER_DATA = {
  'email': 'email@email.com',
  'name': 'Nome do Cliente',
  'notes': 'Anotações Gerais'
};

var PLAN_DATA = {
  'name': 'Plano Básico',
  'identifier': 'basic_plan',
  'interval': '1',
  'interval_type': 'months',
  'prices[][currency]': 'BRL',
  'prices[][value_cents]': '1000',
  'features[][name]': 'Número de Usuários',
  'features[][identifier]': 'users',
  'features[][value]': '10'
}

var SUBSCRIPTION_DATA = {
  'plan_identifier': 'basic_plan',
  'customer_id': '',
  'only_on_charge_success': 'false',
  'subitems[][description]': 'Item um',
  'subitems[][price_cents]': '1000',
  'subitems[][quantity]': '1'
}

var PAYMENT_METHOD_DATA = {
  'description': 'Meu Cartão de Crédito',
  'item_type': 'credit_card',
  'data[number]': '4111111111111111',
  'data[verification_value]': '123',
  'data[first_name]': 'Joao',
  'data[last_name]': 'Silva',
  'data[month]': '12',
  'data[year]': '2015'
};
/*

when.join(
          iugu.plans.create(PLAN_DATA),
          iugu.customers.create(CUSTOMER_DATA)

        ).then(function(j) {
          var plan = j[0];
          var customer = j[1];
          console.log(j);

          iugu.customers.createPaymentMethod(customer.id, PAYMENT_METHOD_DATA, function(err, res) {
            console.log(err);
            console.log(res);

            SUBSCRIPTION_DATA.customer_id = customer.id

            cleanup.deleteCustomer(customer.id);
            cleanup.deletePlan(plan.id);
            return iugu.subscriptions.create(SUBSCRIPTION_DATA);
          });
        })
        */

//clearAll();

/*
iugu.plans.create(PLAN_DATA, function(err, plan) {
  iugu.customers.create(CUSTOMER_DATA, function(err, customer) {
    iugu.customers.createPaymentMethod(customer.id, PAYMENT_METHOD_DATA, function(err, res) {
      SUBSCRIPTION_DATA.customer_id = customer.id
       iugu.subscriptions.create(SUBSCRIPTION_DATA);

    });
  })
})*/

function clearAll() {
  iugu.invoices.list(function(err, res) {
  console.log(err);
  console.log(res);
  res.items.forEach(function (item) {
    iugu.invoices.del(item.id, function(e, r) {
      console.log(e);
      console.log(r);
    });
  });
});
iugu.subscriptions.list(function(err, res) {
  console.log(err);
  console.log(res);
  res.items.forEach(function (item) {
    iugu.subscriptions.del(item.id);
  });
});

iugu.customers.list(function(err, res) {
  console.log(err);
  console.log(res);
  res.items.forEach(function (item) {
    iugu.customers.del(item.id);
  });
});

iugu.plans.list(function(err, res) {
  console.log(err);
  console.log(res);
  res.items.forEach(function (item) {
    iugu.plans.del(item.id);
  });
});


}

console.log('test.js');
/*
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
*/
    var data = {
        method: 'bank_slip',
        email: 'lspecian@gmail.com',
        'items': [{description: 'Saco de batata',
                quantity: '1',
                price_cents: '100'} ,
                {description: '2 Saco de batata',
                quantity: '1',
                price_cents: '100'
              }]
    }

    //data.token = token.id;
    iugu.charge.create(data, function(err, res) {
      console.log(err);
      console.log(res);
    });
//});
