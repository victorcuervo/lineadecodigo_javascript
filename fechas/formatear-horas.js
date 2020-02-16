/**
 * @file formatear-horas.js
 * @version 1.0
 * @author Víctor Cuervo - http://lineadecodigo.com
 * @date   15/febrero/2020
 * @url  http://lineadecodigo.com/javascript/pdte/
 * @description Utilización del método .toLocaleTimeString para dar formato a una hora dependiendo de la localización.
*/

// Definimos una fecha
const fecha = new Date('February 15, 2020 20:52:30 GMT+00:00');

// El formato americano lo pondrá en AM/PM
console.log(fecha.toLocaleTimeString('en-US'));


// El formato español lo pondrá en un formato 24h
console.log(fecha.toLocaleTimeString('es-ES'));