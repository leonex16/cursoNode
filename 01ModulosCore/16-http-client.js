'use strict';

let https = require('https');
let options = {
  host : 'a.com',
  port : 443,
  path : '/'
};

https
  .get(options, res => {
  console.log(`El sitio ${options.host} a respondido. Código de estado: ${res.statusCode}`)
  })
  .on('error', error => console.log(`El sitio ${options.host} a no respondió. Código de estado: ${error.code}`))