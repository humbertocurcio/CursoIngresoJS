/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	

	let mostrarNombre;
	let mostrarEdad;
	let mensaje;

	mostrarNombre = document.getElementById ("txtIdNombre").value;
	mostrarEdad = document.getElementById ("txtIdEdad").value;
	mensaje = "su nombre es "+ mostrarNombre + " y tiene " + mostrarEdad


	alert(mensaje);
}

