/**
 * @file formatear-monedas.js
 * @version 1.0
 * @author Víctor Cuervo - http://lineadecodigo.com
 * @date   23/septiembre/2020
 * @url  http://lineadecodigo.com/javascript/formatear-divisas-en-javascript/
 * @description Ejemplo que nos explica cómo dar formato a las divisas
*/


const cantidad = 1235.64;

console.log(new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(cantidad));
console.log(new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(cantidad));
console.log(new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(cantidad));

