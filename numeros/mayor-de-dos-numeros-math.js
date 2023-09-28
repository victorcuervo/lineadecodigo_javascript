/**
 * @file mayor-de-dos-numeros-math.js
 * @version 1.0
 * @author Víctor Cuervo - http://lineadecodigo.com
 * @date   28/mayo/2023
 * @url  http://lineadecodigo.com/javascript/mayor-de-dos-numeros-en-javascript-con-math/
 * @description Saber cual de los dos números es mayor con el objeto Math
*/

let n1 = 5;
let n2 = 2;

// Con estructuras
if (n1>n2)
  console.log("El mayor de los números " + n1 + " y " + n2 + " es " + n1);
else if (n2>n1)
  console.log("El mayor de los números " + n1 + " y " + n2 + " es " + n2);
else
  console.log("Los números " + n1 + " y " + n2 + " son iguales");

  // Con Math
console.log("El mayor de los números " + n1 + " y " + n2 + " es " + Math.max(n1,n2));
