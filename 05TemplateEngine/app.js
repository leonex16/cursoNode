'use strict';

let express = require('express');
let favicon = require('serve-favicon');
var morgan = require('morgan')
let routes = require('./routes/index');

let app = express();
let port = process.env.PORT || 3000; // Obten el puerto que tiene el proceso, sino, el 3000
let path = {
  favicon : `${__dirname}/public/img/node-favicon.png`,
  public: `${__dirname}/public`,
  views: `${__dirname}/views`
};

app
  // Configurando App
  .set('views', path.views)
  .set('view engine', 'jsx')
  .engine('jsx', require('express-react-views').createEngine())
  .set('port', port)
  // Configurando Middlewares
  .use(favicon(path.favicon))
  .use(morgan('dev'))
  .use(express.static(path.public))
  // Configurando Middleware Enrutador
  .use('/', routes);

module.exports = app;
