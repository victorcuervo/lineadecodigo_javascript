/**
 * @file swapping-variables.js
 * @version 1.0
 * @author Víctor Cuervo - http://lineadecodigo.com
 * @date   27/agosto/2017
 * @url  http://lineadecodigo.com/javascript/swapping-variables-javascript/
 * @description Realizar un intercambio de variables
*/

// Con variable intermedia
var x = 1;
var y = 2;

console.log('Variable x con valor:' + x);
console.log('Variable y con valor:' + y);

var z = x;
x = y;
y = z;

console.log('Variable x con valor:' + x);
console.log('Variable y con valor:' + y);

// Con Swapping
var a = 1;
var b = 2;

console.log('Variable a con valor:' + a);
console.log('Variable b con valor:' + b);

[a,b] = [b,a];

console.log('Variable a con valor:' + a);
console.log('Variable b con valor:' + b);
