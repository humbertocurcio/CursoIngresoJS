function mostrar()
{
	//tomo la edad  

	let edad
	
	edad = parseInt(document.getElementById ("txtIdEdad").value);

	if(edad >= 18)
	{
		alert("usted es adulto");
	}
	else
	{
		if(edad <=13) 
		{
			alert("usted es un niño");
		}
		else
		{
			alert("usted es un adolescente");
		}
	
	}

}
//FIN DE LA FUNCIÓN