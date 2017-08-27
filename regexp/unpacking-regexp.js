/**
 * @file unpacking-regexp.js
 * @version 1.0
 * @author Víctor Cuervo - http://lineadecodigo.com
 * @date   27/agosto/2017
 * @url  http://lineadecodigo.com/javascript/unpacking-de-valores-con-expresiones-regulares-en-javascript/
 * @description Unpacking de valores con expresiones regulares
*/


var cadena = 'Buenos días Juan, ¿Te gustó Ávila?';
var cadena_analizada = /días ([^]+),[^]+gustó ([^]+)\?/.exec(cadena);

console.log(cadena_analizada);

var [,nombre,ciudad] = cadena_analizada;

console.log(nombre);
console.log(ciudad);
