/**
 * @file unpacking-objetos-anidados.js
 * @version 1.0
 * @author Víctor Cuervo - http://lineadecodigo.com
 * @date   29/agosto/2017
 * @url  http://lineadecodigo.com/javascript/unpacking-objetos-anidados-javascript/
 * @description Realizar un unpacking de un objetos anidados
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

console.log("--Usando Objetos--");
console.log(autor.nombre);
console.log(autor.libros[0].titulo);

// Unpacking
console.log("--Usando Unpacking--");
var {nombre} = autor;
console.log(nombre);

var {libros: [{titulo}]} = autor;
console.log(titulo);

for (var {titulo} of autor.libros)
 console.log(titulo);
