function mostrar()
{
	let mesAnio;

	mesAnio = document.getElementById("txtIdMes").value;

	switch(mesAnio)
	{
		case "Enero":
			alert("Que comiencen bien el año");
			break;
		
		case "Marzo":
			alert("A clases!!!");
			break;

		case "Julio":
			alert("Se vienen las vacaciones");
			break;

		case "Diciembre":
			alert("Felices fiestas!!!");
			break;
		default :
			break;
	}

	


}//FIN DE LA FUNCIÓN