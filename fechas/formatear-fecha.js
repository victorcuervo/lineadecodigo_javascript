/**
 * @file formatear-fecha.js
 * @version 1.0
 * @author Víctor Cuervo - http://lineadecodigo.com
 * @date   15/febrero/2020
 * @url  http://lineadecodigo.com/javascript/pdte/
 * @description Manejo del método Intl.DateTimeFormat para dar formato a las fechas.
*/

// Definimos una fecha
const fecha = new Date('February 15, 2020 20:52:30 GMT+00:00');

// En inglés americano se pone primero el mes y luego el día.
console.log(new Intl.DateTimeFormat('en-US',{dateStyle:'short'}).format(fecha));
console.log(new Intl.DateTimeFormat('en-US',{dateStyle:'full'}).format(fecha));

// Es formato español se pone primero el día y luego el mes.
console.log(new Intl.DateTimeFormat('es-ES',{dateStyle:'short'}).format(fecha));
console.log(new Intl.DateTimeFormat('es-ES',{dateStyle:'full',calendar:'islamic'}).format(fecha));
