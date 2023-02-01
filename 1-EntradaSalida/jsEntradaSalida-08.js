/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let numDividendoTexto
	let numDividendo
	let numDivisorTexto
	let numDivisor
	let mensaje

	numDividendoTexto= document.getElementById ("txtIdNumeroDividendo").value;
	numDivisorTexto = document.getElementById ("txtIdNumeroDivisor").value;

	numDividendo = parseInt (numDividendoTexto);
	numDivisor = parseInt (numDivisorTexto);
	
	mensaje = "El resto es " + numDividendo % numDivisor;

	alert(mensaje);
}
