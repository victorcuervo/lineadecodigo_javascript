/**
 * @file objeto-con-tostring.js
 * @version 1.0
 * @author Víctor Cuervo - http://lineadecodigo.com
 * @date   27/agosto/2017
 * @url  http://lineadecodigo.com/javascript/sobrescribir-el-metodo-tostring-en-javascript/
 * @description Crear un método .toString() en un objeto Javascript
*/

function persona(nombre,apellido,edad){
	this.nombre = nombre;
	this.apellido = apellido;
	this.edad = edad;
	this.toString = function() { return this.nombre + " " + this.apellido + ". " + this.edad + " años"; };
}

var p1 = new persona("Victor","Cuervo",32);
console.log(p1.toString());

persona.prototype.toString = function toString() { return this.nombre + " " + this.apellido + ". " + this.edad + " años"; }
console.log(p1.toString());
