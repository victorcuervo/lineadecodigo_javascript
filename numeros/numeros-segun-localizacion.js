/**
 * @file numeros-segun-localizacion.js
 * @version 1.0
 * @author Víctor Cuervo - http://lineadecodigo.com
 * @date   15/febrero/2020
 * @url  http://lineadecodigo.com/javascript/numeros-en-javascript-segun-locale/
 * @description Formatear un número para que aparezca en su localización
*/

const numero = 11223.48;

// Español
console.log(numero.toLocaleString("es-ES"));
// Inglés Americano
console.log(numero.toLocaleString("en-US"));
// Árabe
console.log(numero.toLocaleString("ar-EG"));