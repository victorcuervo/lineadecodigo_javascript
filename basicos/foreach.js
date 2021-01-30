/**
 * @file foreachjs
 * @version 1.0
 * @author Víctor Cuervo - http://lineadecodigo.com
 * @date   30/enero/2021
 * @url  http://lineadecodigo.com/javascript/pdte/
 * @description Realizar un bucle foreach para recorrer una lista de elementos
*/

// Con variable intermedia
const paises=['España','Francia','Holanda','EEUU','Jordania','Australia','Egipto','Japón'];

paises.forEach(function(item,index) {
    console.log("El país " + item + " está en la posición " + index);
}
);