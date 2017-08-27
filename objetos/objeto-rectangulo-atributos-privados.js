/**
 * @file objeto-rectangulo-atributos-privados.js
 * @version 1.0
 * @author Víctor Cuervo - http://lineadecodigo.com
 * @date   27/agosto/2017
 * @url	http://lineadecodigo.com/javascript/crear-un-objeto-con-metodos-en-javascript/
 * @description Definir atributos privados en Javascript
*/

function rectangulo(base,altura){
	var base = base;
	var altura = altura;
	this.calcularArea = function() { return base*altura; }
	this.getBase = function() {return base;}
	this.getAltura = function() {return altura;}

}

var r1 = new rectangulo(2,6);
console.log("Un rectangulo de " + r1.getBase() + "x" + r1.getAltura() + " tiene un área de " +  r1.calcularArea());
