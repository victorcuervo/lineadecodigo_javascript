/**
 * @file deg2Rad.js
 * @version 1.0
 * @author Víctor Cuervo (http://lineadecodigo.com)
 * @date   20/marzo/2023
 * @url   http://lineadecodigo.com/javascript/pdte/
 * @description  Convertir grados a radianes para funciones trigonométricas
 */

function deg2Rad(deg){
    return deg * (Math.PI/180.0);
}

console.log(deg2Rad(0));
console.log(deg2Rad(90));
console.log(deg2Rad(180));
console.log(deg2Rad(270));
console.log(deg2Rad(360));