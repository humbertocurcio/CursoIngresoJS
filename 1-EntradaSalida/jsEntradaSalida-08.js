/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/

/*
Ejercicio 8.bis: Ingresar dos numeros por id
Se pide:
mostrar por alert:
a) La suma de los dos numeros
b) El promedio de los numeros
c) El modulo de los numeros (el primero en modulo del segundo)
*/

function SacarResto()
{
	
	let numUno
	let numDos
	let mensajeUno
	let mensajeDos
	let mensajeTres

	numUno = document.getElementById ("txtIdNumeroDividendo").value;
	numDos = document.getElementById ("txtIdNumeroDivisor").value;

	numUno = parseInt (numUno);
	numDos = parseInt (numDos);
	
	mensajeUno = "La suma es " + (numUno + numDos);
	mensajeDos = "El promedio es " + (numUno + numDos)/2;
	mensajeTres = "el modulo es " + numUno % numDos;
	
	alert(mensajeUno);
	alert(mensajeDos);
	alert (mensajeTres);
}
