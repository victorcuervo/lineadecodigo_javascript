/**
 * @file tiene-propiedad.js
 * @version 1.0
 * @author Víctor Cuervo - http://lineadecodigo.com
 * @date   27/agosto/2017
 * @url  http://lineadecodigo.com/javascript/saber-si-un-objeto-tiene-una-propiedad-con-javascript/
 * @description Saber si un objeto tiene una propiedad en concreto
*/

function rectangulo(base,altura){
	this.base = base;
	var altura = altura;
	this.calcularArea = function() { return this.base*this.altura; };
	this.getBase = function() {return base;}
	this.getAltura = function() {return altura;}
}

var r1 = new rectangulo(2,3);

if (r1.hasOwnProperty("base"))
	console.log("El objeto tiene la propiedad BASE");
else
	console.log("El objeto NO tiene la propiedad BASE");


if (r1.hasOwnProperty("altura"))
	console.log("El objeto tiene la propiedad ALTURA");
else
	console.log("El objeto NO tiene la propiedad ALTURA");


if (r1.hasOwnProperty("area"))
	console.log("El objeto tiene la propiedad AREA");
else
	console.log("El objeto NO tiene la propiedad AREA");
