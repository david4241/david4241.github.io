'use strict'

//ALERTA
//alert("Esta en mi alerta!!");
//alert("Esta en mi texto!!");

//CONFIRMACION
var mi_resultado = confirm("¿Estas seguro de querer continuar ?")
console.log(mi_resultado);


//INGRESO DATOS
var numero1= parseInt(prompt("¿Que edad tienes? ", 0));
var contador = 18;

/*
Programa que pida dos numeros y que nos digas cual es mayor, el menor y sin son iguales
si los numero no son un numero , que nos vuelsa a pedir
*/

while(numero1 <= 0 ||  isNaN(numero1)) {
	 numero1 = parseInt(prompt('¿Que edad tienes?', 0));
	 
}

if(numero1 == contador){
	alert("PUEDES PASAR");

}else if(numero1 > contador){
	alert("PUEDES PASAR ");
	
}else if(numero1 < contador){
	alert("NO PUEDES PASAR " );
	
}else {
	alert("introduce numero correctos: ");
}

