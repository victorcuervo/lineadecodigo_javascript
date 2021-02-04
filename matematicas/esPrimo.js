/**
 * @file esPrimo.js
 * @version 1.0
 * @author Víctor Cuervo (http://lineadecodigo.com)
 * @date   31/enero/2021
 * @url   http://lineadecodigo.com/javascript/numeros-primos-del-1-al-100-en-javascript/
 * @description  Cálculo de los números primos del 1 al 100
 */


function esPrimo(numero) {
    
    for(let i = 2,raiz=Math.sqrt(numero); i <= raiz; i++)
        if(numero % i === 0) return false;
    return numero > 1;
}  

for (let x=0;x<=100;x++) {
    if (esPrimo(x))
        console.log("El número " + x + " es primo");
}