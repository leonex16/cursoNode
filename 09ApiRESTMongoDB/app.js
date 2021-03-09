'use strict';

let express = require('express');
let favicon = require('serve-favicon');
let bodyParser = require('body-parser');
let restFull = require('express-method-override')('_method');
let morgan = require('morgan');
let routes = require('./routes/movieRouter');

let app = express();
let port = process.env.PORT || 3000; // Obten el puerto que tiene el proceso, sino, el 3000
let path = {
  favicon : `${__dirname}/public/img/node-favicon.png`,
  public: `${__dirname}/public`,
  views: `${__dirname}/views`
};

app
  .set('views', path.views)
  .set('view engine', 'jsx')
  .engine('jsx', require('express-react-views').createEngine())
  .set('port', port)
  .use(favicon(path.favicon))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({extended: false}))
  .use(restFull)
  .use(morgan('dev'))
  .use(express.static(path.public))
  .use(routes);

module.exports = app;
