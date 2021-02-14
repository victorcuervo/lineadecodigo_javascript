/**
 * @file reemplazar-caracter.js
 * @version 1.0
 * @author Víctor Cuervo - http://lineadecodigo.com
 * @date   14/febrero/2021
 * @url  http://lineadecodigo.com/javascript/pdte/
 * @description Reemplazar el caracter concreto de una cadena
*/

String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}


let cadena = "Soy una cadena";
console.log(cadena);

cadena = cadena.replaceAt(3,"_");
cadena = cadena.replaceAt(7,"_");

console.log(cadena);