/**
 * @file ejemplo-javascript-oo.js
 * @version 1.0
 * @author Fernando Carraro Aguirre
 * @date   27/agosto/2017
 * @url  http://lineadecodigo.com/javascript/programacion-orientada-a-objetos-con-javascript-un-sencillo-ejemplo/
 * @description Ejemplo básico de programación orientada a objetos con Javascript
*/

// Constructor de la clase
function Economica(valor,tasa,periodo){
  this.valor=valor;
  this.tasa=tasa;
  this.periodo=periodo;
  this.desplegarResultado=desplegarResultado; // Método para mostrar el resultado
}

// Método para obtener el resultado de la operación
function desplegarResultado(){
   var valorFuturo=parseFloat(this.valor)*Math.pow(1+parseFloat(this.tasa)/100,parseInt(this.periodo));
   console.log("Valor futuro: "+valorFuturo*"\n");
   var result="Valor: "+this.valor+"\nTasa: "+this.tasa+"\nPeriodo: "+this.periodo;
   result+="\nResultado: "+valorFuturo.toString();
   console.log(result);
}

var valor = 2;
var tasa= 4;
var periodo= 1;

// Objeto de tipo Economica
obj1=new Economica(parseFloat(valor),parseFloat(tasa),parseInt(periodo));
obj1.desplegarResultado();
