/**
 * @file unpacking-iterar-objetos.js
 * @version 1.0
 * @author Víctor Cuervo - http://lineadecodigo.com
 * @date   29/agosto/2017
 * @url  http://lineadecodigo.com/javascript/unpacking-iterando-objetos-en-javascript/
 * @description Realizar un unpacking e iterar sobre los elementos de un objeto
*/


var autor = {
  nombre: 'Santiago Posteguillo',
  libros: [
    {
      titulo: 'Africanus, el hijo del cónsul',
      trilogia:'Escipion'
    },
    {
      titulo: 'Las Legiones Malditas',
      trilogia:'Escipion'
    },
    {
      titulo: 'Los Asesinos del Emperador',
      trilogia:'Trajano'
    },
    {
      titulo: 'Circo Máximo',
      trilogia:'Trajano'
    }
  ]
}


// Unpacking
var {nombre} = autor;
console.log(nombre);

var {libros} = autor;
for (var {titulo} of libros)
 console.log(titulo);
