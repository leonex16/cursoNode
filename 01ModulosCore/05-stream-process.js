/*
https://nodejs.org/api/process.html#process_process_stdin
https://nodejs.org/api/process.html#process_process_stdout
*/

'use strict'

let stdin = process.stdin;
let	stdout = process.stdout;
let	person = {
		name : null,
		age : 0
	};

function saveAge(age)
{
	person.age = age

	if( person.age >= 18 )
	{
		stdout.write( person.name + ' es mayor de edad, tiene ' + person.age + ' años\n' )
	}
	else
	{
		stdout.write( person.name + ' es menor de edad, tiene ' + person.age + ' años\n' )
	}

	process.exit()
}

function saveName(name){
	person.name = name

	// Vuelvo a preguntar
	var question = 'Hola ' + person.name + ' ¿Cuántos años tienes?'
	
	quiz(question, saveAge)
}

function quiz(question, callback)
{
  stdout.write( question + ': ' );
	// stdin.resume(); // Permite leer lo que escribe el usuario en la terminal
	
	stdin.once('data', res => callback( res.toString().trim() ) );
}

stdin.setEncoding('utf8') // Todo lo que tengas lo codificas a utf-8
quiz('¿Cómo te llamas?', saveName)