/**
 * @file formatear-listas.js
 * @version 1.0
 * @author Víctor Cuervo - http://lineadecodigo.com
 * @date   23/septiembre/2020
 * @url  http://lineadecodigo.com/javascript/formatear-listas-en-javascript/
 * @description Nos permite dar formato a la extracción de elementos  de una lista.
*/


const ciudades = ['Avila','Salamanca','Segovia'];

const formatter = new Intl.ListFormat('es', { style: 'long', type: 'conjunction' });
console.log(formatter.format(ciudades));

const formatter2 = new Intl.ListFormat('es', { style: 'long', type: 'disjunction' });
console.log(formatter2.format(ciudades));

const formatter3 = new Intl.ListFormat('es', { style: 'narrow', type: 'unit' });
console.log(formatter3.format(ciudades));