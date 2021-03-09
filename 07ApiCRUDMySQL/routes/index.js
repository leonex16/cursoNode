'use strict';

let express = require('express');
let router = express.Router();
let Movies = require('../models/movies')

let requestDb = (req, res,query, view, title) => {
  let promise = new Promise((resolve, reject) => {
    req.getConnection((conFail, conSuccess) => !conFail ? 
      resolve(conSuccess) : 
      reject([conFail, 'Error Promise 1']));
  });

  promise
    .then(conSuccess => {
      conSuccess.query(query, (queryFail, querySuccess) => {
        // if(queryFail) reject([queryFail, 'Error Promise 2']);
        res.render(view, {title, data: querySuccess});
      });
    })
    .catch(err => console.error(err))
};

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
  .use(Movies)
  .get('/', (req, res, next) => requestDb(req, res, 'SELECT * FROM movie', 'index', 'Lista de Películas'))
  .get('/agregar', (req, res, next) => res.render('addMovie', {title: 'Agregar Película'}))
  .post('/', (req, res, next) => {
    req.getConnection((conFail, conSuccess) => {
      let movie = {
        movie_id: req.body.movie_id,
        title: req.body.title,
        release_year: req.body.release_year,
        rating: req.body.rating,
        image: req.body.image
      };
    
      conSuccess.query('INSERT INTO movie SET ?', movie, (err, res) => {
        !err ? 
          console.warn(`${res.OkPacket.affectedRows} Se ha agregado!`) :
          res.redirect('/agregar');
      });
    });
  })
  .get('/editar/:movie_id', (req, res, next) => {
    let movie_id = req.body.movie_id;
    requestDb(req, res, `SELECT * FROM movie WHERE movie_id = ${movie_id}`, 'editMovie','Editar Pelicula')
  })
  .post('/actualizar/:movie_id', (req, res, next) => {
    req.getConnection((conFail, conSuccess) => {
      let movie = {
        movie_id: req.body.movie_id,
        title: req.body.title,
        release_year: req.body.release_year,
        rating: req.body.rating,
        image: req.body.image
      };
    
      conSuccess.query('UPDATE movie SET ? WHERE movie_id = ?', [movie, movie.movie_id], (err, res) => {
        !err ? 
          console.warn(`${res.OkPacket.affectedRows} Se ha editado!`) :
          res.redirect('/editar/:movie_id');
      });
    });
  })
  .post('/eliminar/:movie_id', (req, res, next) => {
    req.getConnection((conFail, conSuccess) => {
      let movie_id = req.body.movie_id;
    
      conSuccess.query('DELETE FROM movie WHERE movie_id = ?', movie_id, (err, res) => {
        !err ? 
          console.warn(`${res.OkPacket.affectedRows} Se ha editado!`) :
          res.redirect('/');
      });
    });
  })
  .use(error404)

module.exports = router; 