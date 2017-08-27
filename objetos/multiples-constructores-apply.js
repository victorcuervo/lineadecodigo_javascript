/**
 * @file multiples-constructores-apply.js
 * @version 1.0
 * @author Víctor Cuervo - http://lineadecodigo.com
 * @date   27/agosto/2017
 * @url  http://lineadecodigo.com/javascript/creando-clases-en-javascript-con-apply/
 * @description Uso de apply para crear múltiples constructores
*/

function persona(nombre,apellido,edad,direccion,cp,ciudad){
	datosbasicos.apply(this,arguments);
	domicilio.apply(this,arguments);
}

function datosbasicos(nombre,apellido,edad,direccion,cp,ciudad) {
	this.nombre = nombre;
	this.apellido = apellido;
	this.edad = edad;
}

function domicilio(nombre,apellido,edad,direccion,cp,ciudad){
	this.direccion = direccion;
	this.cp = cp;
	this.ciudad = ciudad;
}

var p1 = new persona("victor","cuervo","33","calle del pez,3","28001","Madrid");

console.log("Mi código postal es " + p1.cp);
