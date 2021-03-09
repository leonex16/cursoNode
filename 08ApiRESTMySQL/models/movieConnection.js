'use strict';

let mysql = require('mysql');
let conf = require('./db-conf.json')

let dbOptions = {
  host: conf.mysql.host,
  port: conf.mysql.port,
  user: conf.mysql.user,
  password: conf.mysql.pass,
  database: conf.mysql.db
}
let myConn = mysql.createConnection(dbOptions);
myConn.connect(err => {
  return !err ?
  console.log('Conexión establecida. Id' + myConn.threadId) :
  console.error(err.stack)
});
module.exports = myConn;