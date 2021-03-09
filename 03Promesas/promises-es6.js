'use strict';

let fs = require('fs');

let filePath = './assets/names.txt';
let newPath = './assets/names-promises-es6.txt';
let promise = new Promise((resolve, reject) => {
  fs.readFile(filePath, (err, fd) => !err ? resolve(fd) : reject(err))
});

promise
  .then(data => {
    // console.log(data);
    return new Promise((resolve, reject) => {
      fs.writeFile(
        newPath,
        data.toString(),
        err => !err ? resolve('El Archivo Fue Copiado Correctamente') : reject(err)
      );
    }
    );
  })
  .then((success) => console.log(success))
  .catch(err => console.log(err))