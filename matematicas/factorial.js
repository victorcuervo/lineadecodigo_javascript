/**
 * Dos funciones para calcular el factorial de un número entero
 */

function factorialRecursivo (n) { 
	if (n == 0){ 
		return 1; 
	}
	return n * factorialRecursivo (n-1); 
}

function factorial (n) {
	var total = 1; 
	for (i=1; i<=n; i++) {
		total = total * i; 
	}
	return total; 
}


console.log ("Calcula el factorial javascript"); 

console.log("El factorial de 5 con bucle: "+ factorial (5));

console.log("El factorial de 5 recursivo: "+ factorialRecursivo (5));