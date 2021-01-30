/**
 * @file formato-fechas-locale.js
 * @version 1.0
 * @author Víctor Cuervo - http://lineadecodigo.com
 * @date   15/marzo/2020
 * @url  http://lineadecodigo.com/javascript/fechas-en-formato-local-con-javascript/
 * @description Mostrar una fecha en formato de texto atendiendo a un locale concreto.
*/

const fecha = new Date(Date.UTC(2020, 02, 15, 12, 0, 0));

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

// Castellano
console.log(fecha.toLocaleDateString('es-ES', options));

// Alemán
console.log(fecha.toLocaleDateString('de-DE', options));

// Árabe
console.log(fecha.toLocaleDateString('ar-EG', options));

// Por defecto del sistema
console.log(fecha.toLocaleDateString(undefined, options));
