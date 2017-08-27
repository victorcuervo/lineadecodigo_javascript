/**
 * @file tipo-objeto.js
 * @version 1.0
 * @author Víctor Cuervo - http://lineadecodigo.com
 * @date   27/agosto/2017
 * @url  http://lineadecodigo.com/javascript/tipo-de-objeto-en-javascript/
 * @description Tipo de objeto en Javascript
*/

var x = new String("Cadena de Texto");

if (x instanceof String)
	console.log("El objeto es de tipo String");
else
	console.log("El objeto NO es de tipo String");


function rectangulo(base,altura){
	this.base = base;
	this.altura = altura;
	this.calcularArea = function() { return this.base*this.altura; };
}

var r1 = new rectangulo(2,6);

if (r1 instanceof rectangulo)
	console.log("El objeto es de tipo Rectangulo");
else
	console.log("El objeto NO es de tipo rectangulo");
