(function(d, ioSrc, $){
  'use strict';
  
  let io = ioSrc();
  $('#chat-form').on('submit', e => {
    e.preventDefault();

    io.emit('newMessage', $('#message-text').val());
    $('#message-text').val(null);

    return false;
  })

  io.on('newUser', msg => $('#chat').append(`<li><b>${msg}</b></li>`));

  io.on('userSays', msg => $('#chat').append(`<li>${msg}</li>`));

})(document, io, jQuery);