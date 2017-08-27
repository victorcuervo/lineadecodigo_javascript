/**
 * @file objeto-persona.js
 * @version 1.0
 * @author Víctor Cuervo - http://lineadecodigo.com
 * @date   27/agosto/2017
 * @url	http://lineadecodigo.com/javascript/crear-un-objeto-con-metodos-en-javascript/
 * @description Definir un objeto Persona con Javascript
*/

function persona(nombre,apellido,edad){
	this.nombre = nombre;
	this.apellido = apellido;
	this.edad = edad;
}

var p1 = new persona("victor","cuervo",32);
var p2 = new persona("ignacio","santos",33);

console.log(p1.nombre + "-" + p1.edad);
console.log(p2.nombre + "-" + p2.edad);
