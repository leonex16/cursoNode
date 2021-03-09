/*
Buffers
	Una tira de bytes (datos binarios)
	Similar a un array de enteros
	Tamaño fijo
	Manipular datos directamente
		Sockets
		Streams
		Implementar protocolos complejos
		Manipulación de ficheros/imágenes
		Criptografía
*/
'use strict';

let buf = new Buffer(100); // Buffer de 100 posiciones
let buf2 = new Buffer(26); // Buffer de 100 posiciones
let str = '\u00bd + \u00bc = \u00be'

buf.write(str, 0, str.length, 'utf8');
// console.log(
//   buf,
//   buf.toString('ascii'),
//   str,
//   str.length + ' caracteres',
//   Buffer.byteLength(str, 'utf8') + ' bytes'
//   );

for (let i; i > buf2.length; i++) {
  // 97 en ASCII es a
  buf2[i] = i + 97;
}

console.log(buf2.toString('ascii')) // Debería imprimir el abcedeario

// Los buffer son los equivalentes a los arreglos