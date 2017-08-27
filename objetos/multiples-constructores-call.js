/**
 * @file multiples-constructores-call.js
 * @version 1.0
 * @author Víctor Cuervo - http://lineadecodigo.com
 * @date   27/agosto/2017
 * @url  http://lineadecodigo.com/javascript/creando-clases-en-javascript-con-call/
 * @description Uso de call para crear múltiples constructores
*/

function persona(nombre,apellido,edad,direccion,cp,ciudad){
	datosbasicos.call(this,nombre,apellido,edad);
	domicilio.call(this,direccion,cp,ciudad);
}

function datosbasicos(nombre,apellido,edad) {
	this.nombre = nombre;
	this.apellido = apellido;
	this.edad = edad;
}

function domicilio(direccion,cp,ciudad){
	this.direccion = direccion;
	this.cp = cp;
	this.ciudad = ciudad;
}

var p1 = new persona("victor","cuervo","33","calle del pez,3","28001","Madrid");

document.write("Mi código postal es " + p1.cp);
