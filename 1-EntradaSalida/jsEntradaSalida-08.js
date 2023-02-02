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
	
	let num1
	let num2
	let mensaje1
	let mensaje2
	let mensaje3

	num1 = document.getElementById ("txtIdNumeroDividendo").value;
	num2 = document.getElementById ("txtIdNumeroDivisor").value;

	num1 = parseInt (num1);
	num2 = parseInt (num2);
	
	mensaje1 = "La suma es " + (num1 + num2);
	mensaje2 = "El promedio es " + (num1 + num2)/2;
	mensaje3 = "el modulo es " + num1 % num2;
	
	alert(mensaje1);
	alert(mensaje2);
	alert (mensaje3);
}
