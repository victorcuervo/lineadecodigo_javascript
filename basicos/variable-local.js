/**
 * @file variable-local.js
 * @version 1.0
 * @author Víctor Cuervo - http://lineadecodigo.com
 * @date   14/febrero/2021
 * @url  http://lineadecodigo.com/javascript/pdte/
 * @description Variables locales en Javascript
*/


let x=0;

while (x<10) {
    let numero = x;
    x++;
}

console.log(x);

try {
    console.log(numero);
} catch(error) {
    console.log("No se puede acceder a una variable local. " + error);
}



