/**
 * @file console-table.js
 * @version 1.0
 * @author Víctor Cuervo - http://lineadecodigo.com
 * @date   14/febrero/2021
 * @url  http://lineadecodigo.com/javascript/pdte/
 * @description Muestra la salida en consola como si fuese una tabla
*/


function Persona(nombre,edad){
    this.nombre = nombre;
    this.edad = edad;
}

p1 = new Persona("Marta",36);
p2 = new Persona("Luis",12);
p3 = new Persona("Javier",43);

console.table([p1,p2,p3]);

console.table([p1,p2,p3],['edad']);