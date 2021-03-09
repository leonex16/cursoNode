'use strict';

let express = require('express');
let app = express();
let http = require('http').createServer(app);
let io = require('socket.io')(http);

let port = process.env.PORT || 3000;
let publicDir = express.static(`${__dirname}/public`);

app
  .use(publicDir)
  .get('/', (req, res) =>{
    res.sendFile(publicDir + '/index.html');
  })

http.listen(port);

io.on('connection', socket => {
  socket.broadcast.emit('newUser', 'Ha entrado un usuario al chat');
  socket.on('newMessage', msg => {
    io.emit('userSays', msg);
  })
});