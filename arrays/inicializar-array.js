/**
 * @file inicializar-array.js
 * @version 2.0
 * @author Víctor Cuervo - http://lineadecodigo.com
 * @date   21/agosto/2017
 * @url  http://lineadecodigo.com/javascript/inicializar-un-array-en-javascript/
 * @description Inicializar un array en Javascript
*/

var ciudades = new Array("Avila","Salamanca","Zamora","León");

var ciudades2 = new Array(4);
ciudades2[0] = "Avila";
ciudades2[1] = "Salamanca";
ciudades2[2] = "Zamora";
ciudades2[3] = "León";

var mixto = new Array("Victor",34,true);

console.log("Listado el primer array");
for (x=0;x<ciudades.length;x++)
	console.log(ciudades[x]);

console.log("Listado el segundo array");
for (x=0;x<ciudades2.length;x++)
	console.log(ciudades2[x]);

console.log("Listado el tercer array");
for (x=0;x<mixto.length;x++)
	console.log(mixto[x]);
