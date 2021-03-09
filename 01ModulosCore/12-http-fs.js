'use strict';
let http = require('http').createServer(webServer);
let fs = require('fs');

let hostname = '127.0.0.1';
let port = 3000;

function webServer(req, res){
  function readFile(err, data){
    if(err) throw err;
    res.end(data);
  };

  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
  fs.readFile('assets/index.html', readFile);
};

http.listen(port, hostname, () => console.log(`Server running at http://${hostname}:${port}/`));