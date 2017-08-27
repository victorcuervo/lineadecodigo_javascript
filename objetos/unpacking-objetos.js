/**
 * @file unpacking-objetos.js
 * @version 1.0
 * @author Víctor Cuervo - http://lineadecodigo.com
 * @date   27/agosto/2017
 * @url  http://lineadecodigo.com/javascript/unpacking-objetos-javascript/
 * @description Realizar un unpacking de un objeto sobre variables
*/


var objeto = {x:"Saludo", y:3}
console.log (objeto.y);

// Unpacking
var {x,y} = objeto;
console.log(x);

// Cambiando el nombre de las propiedades
var {x:a, y:b} = objeto;
console.log(a);
