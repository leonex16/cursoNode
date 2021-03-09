/*
EL CONTROLADOR SE ENCARGA DE LAS PETICIONES DE LAS VISTAS
ADEMAS DE CONTENER LA LOGICA DE NEGOCIO.
ES EL ENCARGADO DE HACERLE LAS PETICIONES AL MODELO
Y PASARSELAS A LAS VISTAS
*/
'use strict';

let MovieModel = require('../models/movies-model');

class MovieController{
  constructor(){};

  // get getAll(){this.methodGetAll};

  methodGetAll(req, res, next){
    MovieModel.methodGetAll((queryFail, querySuccess) => {
      queryFail ?
        res.render('error', {title: 'ERROR - READ', msg: `No se han encontrado registros...`}):
        res.render('index', {title: 'Lista de Películas', data: querySuccess});
    });
  };

  methodGetOne(req, res, next){
      let movie_id = req.params.movie_id;

      MovieModel.methodGetOne(movie_id, (queryFail, querySuccess) => {
        queryFail ?
          res.render('error', {title: 'ERROR - READONE', msg: `Error al Obtener la película: ${movie_id}`, sqlMsg: queryFail.sqlMessage}):
          res.render(`editMovie`, { title: 'Editar Película', data: querySuccess });
      });
  };

  methodInsert(req, res, next){
    let movie = {
      movie_id: req.body.movie_id,
      title: req.body.title,
      release_year: req.body.release_year,
      rating: req.body.rating,
      image: req.body.image
    };

    MovieModel.methodInsert(movie, queryFail => {
      queryFail ?
        res.render('error', {title: 'ERROR - INSERT', msg: `Error al agregar la película: ${movie.movie_id} - ${movie.title}`, sqlMsg: queryFail.sqlMessage}):
        res.redirect('/');
    });
  };

  methodUpdate(req, res, next){
    let movie = {
      movie_id: req.body.movie_id,
      title: req.body.title,
      release_year: req.body.release_year,
      rating: req.body.rating,
      image: req.body.image
    };

    MovieModel.methodUpdate(movie, queryFail => {
      queryFail ?
        res.render('error', {title: 'ERROR - UPDATE', msg: `Error al actulizar la película: ${movie.movie_id} - ${movie.title}`, sqlMsg: queryFail.sqlMessage}):
        res.redirect('/');
    });
  };

  methodDelete(req, res, next){
    let movie_id = req.params.movie_id;

    MovieModel.methodDelete(movie_id, queryFail => {
      queryFail ?
        res.render('error', {title: 'ERROR - DELETE', msg: `No se ha podido borrar la película: ${movie_id}`, sqlMsg: queryFail.sqlMessage}):
        res.redirect('/');
    });
  };

  methodAddForm(req, res, next){
    res.render('addMovie', {title: 'Agregar Película'})
  };

  methodError404(req, res, next){
    res.render('error404', { title: 'Error 404', description: 'Recurso No Encontrado', error: new Error() });
    next();
  };

};

module.exports = new MovieController();