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
    myConn
      .find()
      .exec((err, docs) => {
        if(err) throw err;
        cb(docs)
      })
  };

  methodGetOne(movie_id, cb){
    myConn
      .findOne({ "movie_id" : movie_id })
      .exec((err, docs) => {
        if(err) throw err;
        cb(docs)
      })
  };

  methodInsert(doc, cb){
    myConn
      .create(doc, (err, docs) => {
        if(err) throw err;
        cb(docs)
      });
  };

  methodUpdate(doc, cb){
    myConn
      .updateOne(
        { "movie_id" : doc.movie_id },
        doc,
        (err, docs) => {
            if(err) throw err;
            cb(docs)
          }
        );
  };

  methodDelete(doc, cb){
    myConn
      .deleteOne(
        { "movie_id" : doc },
        (err, docs) => {
        if(err) throw err;
        cb(docs)
        }
      );
  };

};

module.exports = new MovieModel();