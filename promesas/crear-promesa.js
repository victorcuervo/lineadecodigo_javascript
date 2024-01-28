/**
 * @file crear-promesa.js
 * @version 1.0
 * @author Víctor Cuervo - http://lineadecodigo.com
 * @date   25/enero/2024
 * @url  http://lineadecodigo.com/javascript/crear-promesa-en-javascript/
 * @description Crear una promesa en Javascript.
*/

let promesa = new Promise((resolve, reject) => {

    let numero = Math.floor(Math.random()*6+1);    
    
    if (numero == 6) {
        resolve({ "mensaje":"Tenemos un 6"});
    } else {
        reject({ "mensaje":"Número No Obtenido", "numero":numero});
    }
});

promesa.then(resolve => resolve.mensaje, reject => `${reject.mensaje}. Salió ${reject.numero}`).then((value)=>console.log(value));