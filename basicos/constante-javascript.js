/**
 * @file constante-javascript.js
 * @version 1.0
 * @author Víctor Cuervo - http://lineadecodigo.com
 * @date   14/febrero/2021
 * @url  http://lineadecodigo.com/javascript/pdte/
 * @description Pedir un dato mediante un prompt
*/

const constante = 12;
console.log("El valor de la constante es " + constante);

try {
    constante = 20;
    console.log("El valor de la constante es " + constante);
} catch (error) {
    console.log("El valor de una constante no puede ser modificado: " + error);
}