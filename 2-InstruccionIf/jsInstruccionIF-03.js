function mostrar()
{
	//tomo la edad  

	let edad

	edad = parseInt(document.getElementById ("txtIdEdad").value);

	if(edad >= 18)
	{
		alert("la persona es mayor de edad");
	}
	
	if(edad < 18)
	{
		alert("la persona es menor de edad");
	}
	

}//FIN DE LA FUNCIÓN