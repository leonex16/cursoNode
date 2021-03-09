'use strict';

let express = require('express');
let router = express.Router();

let error404 = (req, res, next) => {
  let error = new Error();
  let props ={
    title: 'Error 404',
    description: 'Recurso No Encontrado',
    error: error
  };
  res.render('error404', props);
  next();
};

router
  .get('/', (req, res) => res.render('index', { name: 'John' }))
  .use(error404)
module.exports = router; 