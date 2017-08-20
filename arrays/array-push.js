/**
 * @file array-push.js
 * @version 2.0
 * @author Víctor Cuervo - http://lineadecodigo.com
 * @date   20/agosto/2017
 * @url  http://lineadecodigo.com/javascript/anadir-elementos-a-un-array-con-javascript-push/
 * @description Realizar una desectructuración de un array
*/

console.log("Antes del Push");

var nombres = ["victor","pedro"];
for (name in nombres)
	console.log(nombres[name]);

console.log("Después del Push");
nombres.push("juan");
nombres.push("maría");
nombres.push("irene");
nombres.push("juan");

for (name in nombres)
	console.log(nombres[name]);
