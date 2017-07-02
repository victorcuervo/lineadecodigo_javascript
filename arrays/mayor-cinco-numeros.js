/**
 * @file mayor-cinco-numeros.js
 * @version 1.0
 * @author Víctor Cuervo - http://lineadecodigo.com
 * @date   2/julio/2017
 * @url  http://lineadecodigo.com/javascript/mayor-cinco-numeros-javascript/  
 * @description Calcular el mayor de 5 números con Javascript
 */

numeros = [5,2,9,4,8];

numeroMayor = numeros[0];

for (x=1;x<numeros.length;x++) {
  if (numeros[x] > numeroMayor)
    numeroMayor = numeros[x];
}

console.log('El número mayor es: ' + numeroMayor);