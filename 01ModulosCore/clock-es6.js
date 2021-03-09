'use strict';

let Clock = (function () {
  let EventEmitter = require('events').EventEmitter
  let inherits = require('util').inherits;
  
  // Constructor
  let Clock = function(){
    setInterval(() => {
      this.emit('tictac');
    }, 1000);
  };

  // A la función se le heredan las caractirísticas de un emisor de eventos
  inherits(Clock, EventEmitter);

  // Se extiende el prototipo // Se le crea un metodo (?)
  Clock.prototype.theTime = () => {
    let date = new Date;
    let hrsAmPm = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    let hrs = addZero(hrsAmPm);
    let mins = addZero(date.getMinutes());
    let secs = addZero(date.getSeconds());
    let ampm = date.getHours() < 12 ? 'am' : 'pm';
    let msg = `${hrs}:${mins}:${secs} ${ampm}`;
  
    function addZero(num){ return num < 10 ? '0' + num : num};

    console.log(msg);
  };

  return Clock

})();

module.exports = Clock;