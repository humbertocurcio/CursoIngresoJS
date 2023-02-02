/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/

/*
Ejercicio 5.bis: 
 se debe mostrar un mensaje :
 "Perez , usted se llama jose y tiene 66 años"
se debe optener el apellido , de la manera que puedan */

function mostrar()
{	

	let mostrarNombre;
	let mostrarEdad;
	let mensaje;
	let apellido;
	
	apellido = prompt ("cual es su apellido?");

	mostrarNombre = document.getElementById ("txtIdNombre").value;

	mostrarEdad = document.getElementById ("txtIdEdad").value;

	mensaje ="Sr. " + apellido + ", usted se llama " + mostrarNombre + " y tiene " + mostrarEdad + " años";


	alert(mensaje); 
}

