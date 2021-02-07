/**
 * @file multiplicar-matrices.js
 * @version 1.0
 * @author Víctor Cuervo - http://lineadecodigo.com
 * @date   7/febrero/2021
 * @url  http://lineadecodigo.com/javascript/pdte/
 * @description Código que nos multiplica matrices en Javascript
*/

function multiplicarMatriz(m1,m2) {

    fil_m1 = m1.length;
    col_m1 = m1[0].length;

    fil_m2 = m2.length;
    col_m2 = m2[0].length;

    if (col_m1 != fil_m2)
        throw "No se pueden multiplicar las matrices";
            
    let multiplicacion = new Array(fil_m1);
    for (x=0; x<multiplicacion.length;x++)
        multiplicacion[x] = new Array(col_m2).fill(0);

    for (x=0; x < multiplicacion.length; x++) {
        for (y=0; y < multiplicacion[x].length; y++) {            		            		
            for (z=0; z<col_m1; z++) {
                multiplicacion [x][y] = multiplicacion [x][y] + m1[x][z]*m2[z][y]; 
            }
        }
    }

    return multiplicacion;

}   

function imprimitMatriz(matriz) {
    for (x=0;x<matriz.length;x++) {
        text = ""
        for (y=0;y<matriz[x].length;y++) {
            text += matriz[x][y] + "\t";
        }
        console.log(text)
    }
}

m1 = [[1,2,3],[4,5,6]];
m2 = [[7,8],[9,10],[11,12]];
r = multiplicarMatriz(m1,m2);

console.log(imprimitMatriz(r));