/**
 * @file digitos-significantes.js
 * @version 1.0
 * @author Víctor Cuervo - http://lineadecodigo.com
 * @date   23/septiembre/2020
 * @url  http://lineadecodigo.com/javascript/digitos-significativos-en-javascript/
 * @description Formatear números para dejar solo los dígito significantes.
*/

const cantidades = [1235467.64,24535467.12,3456783.2,15653231,8976562,3122122];

cantidades.forEach(element => {
    console.log(new Intl.NumberFormat('es-ES', { maximumSignificantDigits: 2 }).format(element));
});





