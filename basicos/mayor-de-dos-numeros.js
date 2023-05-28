/**
 * @file mayor-de-dos-numeros.js
 * @version 1.0
 * @author Víctor Cuervo - http://lineadecodigo.com
 * @date   28/mayo/2023
 * @url  http://lineadecodigo.com/javascript/pdte/
 * @description Saber cual de los dos números es mayor.
*/


let n1 = 5;
let n2 = 2;

if (n1>n2) {
    console.log(n1 + " es mayor que " + n2);
} else if (n2 > n1) {
    console.log(n2 + " es mayor que " + n1);
} else {
    console.log("Los dos números osn iguales");
}

console.log(Math.max(5,2,4,7,14));
