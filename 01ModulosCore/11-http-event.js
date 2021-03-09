'use strict';
let http = require('http').createServer(webServer);
let fs = require('fs');
let index = fs.createReadStream('assets/index.html');

let hostname = '127.0.0.1';
let port = 3000;

function webServer(req, res){
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
  index.pipe(res);
};

http.listen(port, hostname, () => console.log(`Server running at http://${hostname}:${port}/`));