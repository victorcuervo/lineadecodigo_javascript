/**
 * @file rellenar-array.js
 * @version 1.0
 * @author Víctor Cuervo - http://lineadecodigo.com
 * @date   13/febrero/2021
 * @url  http://lineadecodigo.com/javascript/rellenar-un-array-con-numeros/
 * @description Rellena los elementos de un array con un valor mediante un método fill.
*/


let miarray = new Array(10);
miarray.fill(2,0,10);

miarray.forEach(function(item,index,arr){
    console.log("Posición " + index + ": " + item);
});