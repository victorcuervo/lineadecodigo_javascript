/**
 * @file desestructurar-array.js
 * @version 1.0
 * @author Víctor Cuervo - http://lineadecodigo.com
 * @date   20/agosto/2017
 * @url  http://lineadecodigo.com/javascript/desestructurar-arrays-javascript/
 * @description Realizar una desectructuración de un array
*/

var miarray = [1,2,3,4,5];
var [a,b] = miarray;

console.log(a);
console.log(b);

var [x,y, ...resto] = miarray;

console.log(x);
console.log(y);
console.log(resto);
