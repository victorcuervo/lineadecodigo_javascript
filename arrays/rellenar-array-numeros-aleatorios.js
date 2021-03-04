/**
 * @file rellenar-array-numeros-aleatorios.js
 * @version 1.0
 * @author Víctor Cuervo - http://lineadecodigo.com
 * @date   13/febrero/2021
 * @url  http://lineadecodigo.com/javascript/rellenar-un-array-con-numeros-aleatorios/
 * @description Rellena los elementos de un array con números aleatorios
*/


let miarray = Array.from({length: 10}, () => Math.floor(Math.random() * 10));

miarray.forEach(function(item,index,arr){
    console.log(item);
});