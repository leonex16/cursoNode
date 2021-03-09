/*
EL MODELO ES EL UNICO CON ACCESO  A LA DB
SE ENCARGA DE RECIBIR LAS PETICICONES DEL CONTROLADOR
DEBE CONTENER TODAS LOS OPERACIONES QUE SE RELACIONEN CON LA DB
*/
'use strict';

let myConn = require('./movieConnection');

class MovieModel{
  constructor(){};
  
  methodGetAll(cb){
    myConn.query('SELECT * FROM movie', cb);
  };

  methodGetOne(movie_id, cb){
    myConn.query('SELECT * FROM movie WHERE movie_id = ?', movie_id, cb);
  };

  methodInsert(data, cb){
    myConn.query('INSERT INTO movie SET ?', data, cb);
  };

  methodUpdate(data, cb){
    myConn.query('UPDATE movie SET ? WHERE movie_id = ?', [data, data.movie_id], cb);
  };

  methodDelete(movie_id, cb){
    myConn.query('DELETE FROM movie WHERE movie_id = ?', movie_id, cb);
  };

};

module.exports = new MovieModel();