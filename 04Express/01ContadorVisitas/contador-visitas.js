'use strict';

let express = require('express');
let app = express();
let cookieParser = require('cookie-parser');
let cookieSession = require('cookie-session');

app
  .use(cookieParser())
  .use(cookieSession({secret: 'secreto'}))

app
  .get('/', (req, res) => {
    req.session.visitas || (req.session.visitas = 0)
    let n = req.session.visitas++;
    res.end(`<h1>Hola desde Express, me has visitado ${n} veces</h1>`)
  })
  .listen(3000);