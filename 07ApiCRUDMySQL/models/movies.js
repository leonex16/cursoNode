'use strict';

let mysql = require('mysql');
let myConnection = require('express-myconnection');

let dbOptions = {
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '',
  database: 'movies'
};
let Movies = myConnection(mysql, dbOptions, 'request');

module.exports = Movies;