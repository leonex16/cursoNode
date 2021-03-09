// ******************************************************************************
// USAR npm --inspect <nombre-archivo> EN CHROME
// SOLO FUNCIONA EN CHROME DEBIDO A QUE NODE SE BASA EN EL MOTOR DE CHROME (V8)
// ******************************************************************************
'use strict';

let http = require('http');

let hostname = '127.0.0.1';
let port = 3000;

let webServer = (req, res) => {
  res
    .writeHead(200, {'Content-Type': 'text/html'})
    .end('Hello World');
};

let cbListen = () => {
  console.log(`Server running at http://${hostname}:${port}/`);
};

http
  .createServer(webServer)
  .listen(port, hostname, cbListen);
