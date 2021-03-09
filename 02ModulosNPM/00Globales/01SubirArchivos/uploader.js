'use strict';

let http = require('http').createServer(serverUpload);
let util = require('util');
let formidable = require('formidable');
let fse = require('fs-extra');

function serverUpload(req, res) {
  if(req.method === 'GET'){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`
      <h1>Uploader de Archivos en Node.js</h1>
      <form action="/upload" enctype="multipart/form-data" method="post">
        <div><input type="file" name="upload" required></div>
        <div><input type="submit" value="Subir Archivo"></div>
      </form>
    `);
  };
  if(req.method === 'POST' && req.url === '/upload'){
    let form = new formidable.IncomingForm();

    form
      .parse(req, (err, fields, files) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>Archivos Recibidos</h1>' + util.inspect({file: files}));
        res.end();
      })
      .on('progress', (bytesReceived, bytesExpected) => {
        let percentCompleted = (bytesReceived / bytesExpected) * 100;
        console.log(percentCompleted.toFixed(2));
      })
      .on('error', err => {})
      .on('end', function(fields, files){
        console.log(this)
        let tempPath = this.openedFiles[0].path; // Ubicación Temporal del Archivo
        let fileName = this.openedFiles[0].name;
        let newPath = './upload/'+ fileName;

        fse.copy(tempPath, newPath, err => !err ? console.log('Subido correctamente') : console.error(err));
      })
  };
};

http.listen(3000);