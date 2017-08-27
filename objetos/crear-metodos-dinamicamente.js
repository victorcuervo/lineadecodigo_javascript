/**
 * @file crear-metodos-dinamicamente.js
 * @version 1.0
 * @author Víctor Cuervo - http://lineadecodigo.com
 * @date   27/agosto/2017
 * @url  http://lineadecodigo.com/javascript/crear-metodos-dinamicamente-en-javascript/
 * @description Crear métodos dinámicamente con Javascript
*/

function rectangulo(base,altura){
	this.base = base;
	this.altura = altura;
}

r1 = new rectangulo(2,4);
r2 = new rectangulo(4,8);

rectangulo.prototype.calcularArea = function() { return this.base*this.altura; };

console.log("Un rectangulo de " + r1.base + "x" + r1.altura + " tiene un área de " +  r1.calcularArea());
console.log("Un rectangulo de " + r2.base + "x" + r2.altura + " tiene un área de " +  r2.calcularArea());
