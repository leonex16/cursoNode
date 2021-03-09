'use strict';

let EventEmitter = require('events').EventEmitter
let inherits = require('util').inherits;

let Clock = function(){
  let self = this;

  setInterval(() => {
    self.emit('tictac');
  }, 1000);
};

inherits(Clock, EventEmitter);

Clock.prototype.theTime = () => {
  let date = new Date;
  let hrs = date.getHours();
  let mins = date.getMinutes();
  let secs = date.getSeconds();
  let msg = `${hrs}:${mins}:${secs}`;

  console.log(msg);
  
};


let cucu = new Clock();

cucu.on('tictac', () => {
  cucu.theTime();
});