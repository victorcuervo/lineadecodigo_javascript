/**
 * @file variable-global.js
 * @version 1.0
 * @author Víctor Cuervo - http://lineadecodigo.com
 * @date   14/febrero/2021
 * @url  https://lineadecodigo.com/javascript/variables-globales-en-javascript/
 * @description Variables globales en Javascript
*/


// Variables Globales
var n1 = 2;
var n2 = 3;
var suma = 0;

function sumar() {
    suma = n1+n2;
}

function imprimir() {
    console.log(suma);
}

imprimir();
sumar();
imprimir();





