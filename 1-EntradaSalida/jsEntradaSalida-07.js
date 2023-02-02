/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

function sumar()
{	
	let sumNumUno
	let sumNumDos
	let mensaje

	sumNumUno = document.getElementById ("txtIdNumeroUno").value;
	sumNumDos = document.getElementById ("txtIdNumeroDos").value;

	sumNumUno = parseInt (sumNumUno);
	sumNumDos = parseInt (sumNumDos);

	mensaje = "El total es " + (sumNumUno + sumNumDos);

		alert(mensaje);	
}

function restar()
{
	let restNumUno
	let restNumDos
	let mensaje

	restNumUno = document.getElementById ("txtIdNumeroUno").value;
	restNumDos = document.getElementById ("txtIdNumeroDos").value;

	restNumUno = parseInt (restNumUno);
	restNumDos = parseInt (restNumDos);

	mensaje = "La Diferencia es " + (restNumUno - restNumDos);

	alert(mensaje);
 	
}

function multiplicar()
{ 
	let mulNumUno
	let mulNumDos
	let mensaje

	mulNumUno = document.getElementById ("txtIdNumeroUno").value;
	mulNumDos = document.getElementById ("txtIdNumeroDos").value;

	mulNumUno = parseInt (mulNumUno);
	mulNumDos = parseInt (mulNumDos);

	mensaje = "El Producto es " + mulNumUno * mulNumDos; 

	alert(mensaje);
}

function dividir()
{
	let divNumUno
	let divNumDos
	let mensaje

	divNumUno = document.getElementById ("txtIdNumeroUno").value;
	divNumDos = document.getElementById ("txtIdNumeroDos").value;

	divNumUno = parseInt (divNumUno);
	divNumDos = parseInt (divNumDos);

	mensaje = "El Cociente es " + divNumUno / divNumDos;
	
	alert(mensaje);
}

