'use strict';

let myData = require('./my-data');
// let Clock = require('./clock-es5');
let Clock = require('./clock-es6');
let cucu = new Clock();

console.log(myData);

cucu.on('tictac', () => {
  cucu.theTime();
});