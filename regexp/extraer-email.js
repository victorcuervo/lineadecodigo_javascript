/**
 * @file extraer-email.js
 * @version 1.0
 * @author Víctor Cuervo - http://lineadecodigo.com
 * @date   27/agosto/2017
 * @url  http://lineadecodigo.com/javascript/xxx/
 * @description Extraer un email mediante una expresión regular y el uso del operador de destructuring en Javascript
*/


var email = 'juan.sanchez@gmail.com';
var email_analizado = /^([^]+)@(\w+).(\w+)$/.exec(email);

console.log(email_analizado);

var [,nombre,servidor,dominio] = email_analizado;

console.log('Nombre del usuario: ' + nombre);
console.log('Servidor de Correo: ' + servidor);
console.log('Dominio: ' + dominio);
