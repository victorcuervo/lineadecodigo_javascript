/**
 * @file fechas-relativas-texto.js
 * @version 1.0
 * @author Víctor Cuervo - http://lineadecodigo.com
 * @date   09/febrero/2020
 * @url  http://lineadecodigo.com/javascript/fechas-relativas-en-javascript/
 * @description Utilizar formatos relativos para poner en texto fechas.s
*/

// Si eliminas la propiedad numeric lo muestra en números.
const rtf1 = new Intl.RelativeTimeFormat('es-ES', { style: 'long', numeric:'auto' });

// Dentro de tres trimestres
console.log(rtf1.format(3, 'quarter'));

// El mes pasado
console.log(rtf1.format(-1, 'month'));

// Ayer
console.log(rtf1.format(-1, 'day'));

// Pasado mañana
console.log(rtf1.format(2, 'day'));
