'use strict';

let app = require('../app.js');
let server = app.listen(app.get('port'), () => {
  console.log(`Iniciando Express... Puerto: ${app.get('port')}`)
})