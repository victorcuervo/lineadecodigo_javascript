/**
 * @file aplanararray.js
 * @version 1.0
 * @author Víctor Cuervo - http://lineadecodigo.com
 * @date   7/febrero/2021
 * @url  http://lineadecodigo.com/javascript/aplanar-arrays-en-javascript/
 * @description Código que nos permite aplanar los elementos de un array
*/

const a=[[1,2],[3,[4,5],6],[7],[8,9,10]];

// Recorrer el array multidimensional
for (x=0;x<a.length;x++)
	for (y=0;y<a[x].length;y++) 
		console.log(a[x][y]);

const a_flat = a.flat(2);
for (x=0;x<a_flat.length;x++)
	console.log(a_flat[x]);