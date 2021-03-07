/**
 * @file pedir-datos.js
 * @version 1.0
 * @author Víctor Cuervo - http://lineadecodigo.com
 * @date   13/febrero/2021
 * @url  http://lineadecodigo.com/javascript/pedir-datos-con-prompt-en-javascript/
 * @description Pedir un dato mediante un prompt
*/

let valor1 = prompt("Dame el valor 1",0);
let valor2 = prompt("Dame el valor 2",0);

let suma = parseInt(valor1) + parseInt(valor2); 

console.log("La suma de " + valor1 + "+" + valor2 + " es " + suma);