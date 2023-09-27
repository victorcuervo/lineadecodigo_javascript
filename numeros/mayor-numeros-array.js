/**
 * @file mayor-numeros-array.js
 * @version 1.0
 * @author Víctor Cuervo - http://lineadecodigo.com
 * @date   28/mayo/2023
 * @url  http://lineadecodigo.com/javascript/numero-mayor-en-un-array/
 * @description Saber cual de los dos números es mayor con el objeto Math
*/

let numeros = [5,2,4,7,14];
console.log("El mayor de los números " + numeros.toString() + " es " + Math.max(...numeros));