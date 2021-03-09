'use strict';

let express = require('express');
const MovieController = require('../controllers/movieController');
let router = express.Router();

router
  .get('/', MovieController.methodGetAll)
  .get('/agregar', MovieController.methodAddForm)
  .post('/', MovieController.methodInsert)
  .get('/editar/:movie_id', MovieController.methodGetOne)
  .put('/actualizar/:movie_id', MovieController.methodUpdate)
  .delete('/eliminar/:movie_id', MovieController.methodDelete)

  // .post('/actualizar/:movie_id', MovieController.methodUpdate)
  // .post('/eliminar/:movie_id', MovieController.methodDelete)
  .use(MovieController.methodError404)

module.exports = router; 