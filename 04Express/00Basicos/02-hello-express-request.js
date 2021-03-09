'use strict';

let express = require('express');
let app = express();

app
  .get('/', (req, res) => {
    res.end('Hola Mundo Desde Express')
  })
  // Pasando Parámetros :nombreParametro
  .get('/user/:id-:name-:age', (req, res) => {
    res.end('Hola Mundo Desde Express ' + req.params)
  })
  // Pasando valores ?nombreQuery=value Ej ?q=helloWorld
  .get('/search/', (req, res) => {
    res.end(req.query.q) // helloWorld
  })
  .listen(3000);