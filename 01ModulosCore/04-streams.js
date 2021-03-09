/*
Streams
	'Chorros' de información que se transmiten en 'Pedazos' (Chunks)
	3 tipos: Lectura / Escritura / Duplex
	Instancias de EventEmitter
	Acceso asíncrono
	Es raro crear streams directamente
	Pero muchos recursos nos ofrecen este interfaz
	Detrás de muchos mecanismos de Node.JS
		stdin/stdout
		request de HTTP
		Sockets
		Manipulación de ficheros/imágenes
*/

'use strict'

let fs = require('fs');
let readStream = fs.createReadStream('assets/names.txt');
let writeStream = fs.createWriteStream('assets/name_copy.txt');

readStream.pipe(writeStream);

// En como addEventListener
readStream
  // Mientras haya data, se ejecutará la función
  .on('data', chunk => console.log(`He leído ${chunk.length} caracteres.`))
  // Cuando finalices la lectura, ejecuta la función
  .on('end', () => console.log('Se terminó la lectura.'));
