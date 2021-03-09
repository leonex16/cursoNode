'use strict';

class Clock{
  constructor(){
    setInterval(() => {
      this.theTime();
    }, 1000);
  };

  // Se extiende el prototipo // Se le crea un metodo (?)
  theTime(){
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

};

module.exports = Clock;