/**
 * @file objeto-rectangulo-metodos-privados.js
 * @version 1.0
 * @author Víctor Cuervo - http://lineadecodigo.com
 * @date   27/agosto/2017
 * @url	http://lineadecodigo.com/javascript/clase-javascript-con-metodos-privados/
 * @description Definir métodos privados en Javascript
*/

function rectangulo(base,altura){
	var base = base;
	var altura = altura;
	this.calcularArea = function() { return base*altura; };
	this.getBase = function() {return base;}
	this.getAltura = function() {return altura;}

	this.inc = function() { incBase(); incAltura(); };

	function incBase() { base++; }
	function incAltura() { altura++; }
}

var r1 = new rectangulo(2,6);
r1.inc();

console.log("Un rectangulo de " + r1.getBase() + "x" + r1.getAltura() + " tiene un �rea de " +  r1.calcularArea());
