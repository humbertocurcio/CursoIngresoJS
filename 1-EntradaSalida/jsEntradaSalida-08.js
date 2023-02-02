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
	
	let numDividendo
	let numDivisor
	let mensaje

	numDividendo = document.getElementById ("txtIdNumeroDividendo").value;
	numDivisor = document.getElementById ("txtIdNumeroDivisor").value;

	numDividendo = parseInt (numDividendo);
	numDivisor = parseInt (numDivisor);
	
	mensaje = "El resto es " + numDividendo % numDivisor;

	alert(mensaje);
}
