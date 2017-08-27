/**
 * @file crear-propiedades-dinamicas.js
 * @version 1.0
 * @author Víctor Cuervo - http://lineadecodigo.com
 * @date   27/agosto/2017
 * @url  http://lineadecodigo.com/javascript/crear-propiedades-dinamicas-en-javascript/
 * @description Crear propiedades dinámicamente con Javascript
*/

function persona(nombre,apellido,edad){
	this.nombre = nombre;
	this.apellido = apellido;
	this.edad = edad;
}

var p1 = new persona("victor","cuervo","32");
persona.prototype.ciudad = "Avila";

var p2 = new persona();
p2.nombre = "Juan";
p2.apellido = "Sin Tierra";
p2.edad = "45";

console.log("Ciudad: " + p1.ciudad);
console.log("Ciudad: " + p2.ciudad);
