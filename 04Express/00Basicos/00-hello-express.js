'use strict';

let express = require('express');
let app = express();

app
  .get('/', (req, res) => {
    res.end('Hola Mundo Desde Express')
  })
  .listen(3000);