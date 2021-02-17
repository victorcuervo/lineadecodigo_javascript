/**
 * @file recorrer-matriz.js
 * @version 1.0
 * @author Víctor Cuervo - http://lineadecodigo.com
 * @date   7/febrero/2021
 * @url  http://lineadecodigo.com/javascript/recorrer-una-matriz-con-javascript/
 * @description Recorrer los elementos de una matriz en Javascript
*/

const matriz = [[1,2,3],[4,5,6],[7,8,9]];

for (x=0;x<matriz.length;x++) {
    text = ""
    for (y=0;y<matriz[x].length;y++) {
        text += matriz[x][y] + "\t";
    }
    console.log(text)
}