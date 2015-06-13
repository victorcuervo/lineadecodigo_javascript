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
	
	this.hipotenusa = function (c1,c2) {
		return Math.sqrt(Math.pow(c1, 2) + Math.pow(c2, 2));
		// Aunque esta como experimental se poría poner return Math.hypot(cateto1,cateto2);
	}
	
	this.aleatorio = function (maximo) {
		return parseInt(Math.random()*maximo+1);
	}
	
	// Como sobrescribirlo para pasarle un array
	this.aleatorio2 = function (array) {
		return array[this.aleatorio(array.length-1)];
		
	}

}


var f = new formulas();
console.log ("El área de un círculo de radio 2 es " + f.areaCirculo(2));

for (x=0;x<10;x++) {
	// Números aleatorios entre 1 y 10
	console.log (f.aleatorio(10));
}

var a = [80,81,82,83,84,85];
for (x=0;x<10;x++) {
	// Números aleatorios entre 1 y 10
	console.log (f.aleatorio2(a));
}