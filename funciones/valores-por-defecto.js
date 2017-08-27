/**
 * @file valores-por-defecto.js
 * @version 1.0
 * @author Víctor Cuervo - http://lineadecodigo.com
 * @date   28/agosto/2017
 * @url  http://lineadecodigo.com/javascript/valores-por-defecto-en-una-funcion-javascript/
 * @description Cómo asignar valores por defecto a parámetros de una función
*/

function mifuncion({tamanio = 'XL', color = 'rojo'} = {}) {
  console.log(tamanio,color);
}

mifuncion({color:'verde'});
mifuncion({tamanio:'L', color:'azul'});
mifuncion();
