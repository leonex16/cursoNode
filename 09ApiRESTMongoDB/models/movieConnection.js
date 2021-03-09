'use strict';
/*
COLECCION == TABLA
DOCUMENTO == REGISTROS/FILAS
 */

let mongoose = require('mongoose');
let conf = require('./db-conf.json');

let Schema = mongoose.Schema;
let MoviesSchema = new Schema({
  movie_id : "string",
  title : "string",
  release_year : "string",
  rating : "string",
  image : "string"
},
{
  collection : "movie"
});
// EL MODELO SE LLAMA MOVIE Y TE BASAS EN MOVIESSCHEMA
let moviesModel = mongoose.model('Movie', MoviesSchema)

mongoose.connect(`mongodb://${conf.mongo.host}/${conf.mongo.db}`);

module.exports = moviesModel;