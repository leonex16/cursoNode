'use strict';
let http = require('http').createServer();

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
  .on('request', webServer)
  .listen(port, hostname, cbListen);
