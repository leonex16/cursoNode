'use strict';

let express = require('express');
let app = express();

app
  .get('/', (req, res) => {
    res.send('Hola Mundo Desde Express')
  })
  .get('/leo', (req, res) => {
    // res.send('Bienvenido Leo')
    res.redirect(301, 'https://google.com')
  })
  .get('/json', (req, res) => {
    res.json({
      "name" : "Leonel",
      "age" : "23",
      "email" : "leonexxx16@gmail.com",
    });
  })
  .get('/render', (req, res) => {
    // Arroja error porque aún le falta la configuración de express
    res.render(`${__dirname}/assets/index.html`)
  })
  .listen(3000);