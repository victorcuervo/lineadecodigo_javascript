/**
 * @file extraer-url.js
 * @version 1.0
 * @author Víctor Cuervo - http://lineadecodigo.com
 * @date   27/agosto/2017
 * @url  http://lineadecodigo.com/javascript/extraer-partes-de-una-url-en-javascript/
 * @description Extraer partes de una URL mediante una expresión regular y el uso del operador de destructuring en Javascript
*/


var url = 'https://www.manualweb.net/java/tipos-datos-primitivos/';
var url_analizada = /^(\w+):\/\/([^\/]+)([^]+)$/.exec(url);

console.log(url_analizada);

var [,protocolo,servidor,path] = url_analizada;

console.log('Protocolo: ' + protocolo);
console.log('Servidor: ' + servidor);
console.log('Path: ' + path);
