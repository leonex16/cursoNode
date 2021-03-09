/*
Socket.IO
	1)Eventos connection y disconnect
	2)Puedes crear tus propios eventos
	3)emit(): cuando se comunica un mensaje a todos los clientes conectados
	4)broadcast.emit(): cuando se comunica un mensaje a todos los clientes, excepto al que lo origina
	5)Los 4 puntos anteriores funcionan en el servidor y en el cliente
*/

'use strict';

let http = require('http').createServer(server);
let fs = require('fs');
let io = require('socket.io')(http)
let conexiones = 0;

function server(req, res) {
	fs.readFile('index.html', (err, data) => {
		if(err){
			res.writeHead(500, {'Content-Type': 'text/html'});
			return res.end();			
		}else{
			res.writeHead(200, {'Content-Type': 'text/html'});
			return res.end(data, 'utf-8');
		};
	});
};

http.listen(3000);

io.on('connection', socket => {
	socket.emit('hello', { message: 'Hola Mundo Desde Socket IO'});
	socket.on('otro evento creado', data => console.log('evento obtenido ' + data.msg))

	conexiones++;
	console.log('Conexiones activas: ' + conexiones);

	// socket.emit('connect users', {conexiones});
	socket.broadcast.emit('connect users', {conexiones});
	socket.on('disconnect', () => {
		conexiones--;
		console.log('Conexiones activas: ' + conexiones);
		socket.broadcast.emit('connect users', {conexiones});
		
	});
});