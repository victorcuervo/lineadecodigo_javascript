/**
 * 
 * Fichero con formulas matemáticas
 * 
 */

function formulas() {

	/* Área de un círculo */
	this.areaCirculo = function (radio) {
		return Math.PI * Math.pow(radio,2);
	}
	
	/* Número Aleatorio */
	this.aleatorio = function (maximo) {
		return parseInt(Math.random()*maximo+1);
	}

}


var f = new formulas();
console.log ("El área de un círculo de radio 2 es " + f.areaCirculo(2));

for (x=0;x<10;x++) {
	// Números aleatorios entre 1 y 10
	console.log (f.aleatorio(10));
}