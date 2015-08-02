/**
 * @file formulas.js
 * @version 1.1
 * @author Linea de Codigo (http://lineadecodigo.com)
 * @date   02/agosto/2015
 * @url   http://lineadecodigo.com/tag/javascript-math/
 * @description  Fichero con diferentes formulas matemáticas para Javascript
 */


function formulas() {

	/* Área de un círculo */
	this.areaCirculo = function (radio) {
		return Math.PI * Math.pow(radio,2);
	}
	
	/* Área Triángulo */
	this.areaTriangulo(base,altura) {
		return (base*altura)/2;
	}
	
	/* Número Aleatorio */
	this.aleatorio = function (maximo) {
		return parseInt(Math.random()*maximo+1);
	}
	
	/* Calcular la hipotenusa */
	this.hipotenusa = Math.hypot || function() {
		var y = 0;
		var length = arguments.length;

		for (var i = 0; i < length; i++) {
			if (arguments[i] === Infinity || arguments[i] === -Infinity) {
				return Infinity;
			}
			y += arguments[i] * arguments[i];
		}
		return Math.sqrt(y);
	};

}


var f = new formulas();
console.log ("El área de un círculo de radio 2 es " + f.areaCirculo(2));

console.log("Generar 10 números aleatorios");
for (x=0;x<10;x++) {
	// Números aleatorios entre 1 y 10
	console.log (f.aleatorio(10));
}

console.log ("La hipotenusa de un triángulo de catetos 3 y 2 es: " + f.hipotenusa(3, 2));