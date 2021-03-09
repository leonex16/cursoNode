'use strict';

const { readlink } = require('fs/promises');
let http = require('http');
let querystring = require('querystring');
let util = require('util');
let form = require('fs').readFileSync('assets/form.html');
let dataString = '';

let webServer = (req, res) => {
  if(req.method === 'GET'){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(form);
  }

  if(req.method === 'POST'){
    req
      .on('data', data => dataString += data)
      .on('end', () => {
        let dataObj = querystring.parse(dataString);
        let dataJson = util.inspect(dataObj);
        let templateString = `
        Los datos que enviaste por POST como string son: ${dataString}
        Los datos que enviaste por POST como objeto son: ${JSON.stringify(dataObj)}
        Los datos que enviaste por POST como json son: ${dataJson}
        `;
        console.log(templateString);
        res.end(templateString);
      })
  };
};

http.createServer(webServer).listen(3000);
console.log('Escuchando...')