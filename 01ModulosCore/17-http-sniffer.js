'use strict';

let https = require('https');
let http = require('http');

let options = {
  host : 'jonmircha.com',
  port : 443,
  path : '/'
};
let htmlCode = '';

let httpClient = res => {
  console.log(`El sitio ${options.host} a respondido. 
  Código de estado: ${res.statusCode}`);
  res.on('data', data => htmlCode += data.toString());
};

let httpError = err => {
  console.log(`El sitio ${options.host} a no respondió. 
  Código de estado: ${err.code}`);
};

let webServer = (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(htmlCode);
};

// Instancia Cliente Http
https
  .get(options, httpClient)
  .on('error', httpError)
// Instancia Servidor Http
http.createServer(webServer).listen(3000);

console.log('Escuchando en el puerto 3000...');