// Patron Observador
//https://es.wikipedia.org/wiki/Observer_(patr%C3%B3n_de_dise%C3%B1o)

'use strict';

let EventEmitter = require('events').EventEmitter;
let pub = new EventEmitter();

pub
  .on('myevent', message => console.log(message))
  .once('myevent', message => console.log('Se emite la primera vez'));
  
pub.emit('myevent', 'Soy un emisor de eventos');
pub.emit('myevent', 'Volviendo a emitir');
pub.removeAllListeners('myevent');