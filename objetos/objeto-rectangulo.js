/**
 * @file objeto-rectangulo.js
 * @version 1.0
 * @author Víctor Cuervo - http://lineadecodigo.com
 * @date   27/agosto/2017
 * @url	http://lineadecodigo.com/javascript/crear-un-objeto-con-metodos-en-javascript/
 * @description Definir un objeto Rectángulo con Javascript
*/

function rectangulo(base,altura){
	this.base = base;
	this.altura = altura;
	this.calcularArea = function() { return this.base*this.altura; };
}

var r1 = new rectangulo(2,6);

console.log("Un rectangulo de " + r1.base + "x" + r1.altura + " tiene un área de " +  r1.calcularArea());
