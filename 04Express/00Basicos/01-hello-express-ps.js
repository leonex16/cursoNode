'use strict';

let express = require('express');
let app = express();

app
  .get('/', (req, res) => {
    // __dirname contiene la ruta completa desde donde se ejecuta
    res.sendFile(`${__dirname}/assets/index.html`)
  })
  .listen(3000);