'use strict';

let fs = require('fs');

let filePath = './assets/names.txt';
let newPath = './assets/names-callback.txt';

fs.stat(filePath, (err, stats) => {
  if(err) return console.error(err);
  console.log('El Archivo Correcto');

  fs.readFile(filePath, (err, data) => {
    if(err) return console.error(err);
    console.log('El Archivo fue leído correctamente');

    fs.writeFile(newPath, data, err => {
      if(err) return console.error(err);
      console.log('El Archivo fue copiado correctamente');
    })
  });
});