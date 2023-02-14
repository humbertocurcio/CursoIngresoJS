function mostrar()
{
	let destino;
	let estacion;
	let mensaje;
	
	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById ("txtIdDestino").value;

	switch(estacion)
	{
		case "Invierno":
			switch(destino)
			{
				case "Bariloche":
					mensaje = "Se viaja";
					break;
				case "Cataratas":
				case "Cordoba":
				case "Mar del plata":
					mensaje = "No se viaja";
					break;
			}break;
		case "Verano":
			switch(destino)
			{
				case "Bariloche":
				case "Cordoba":
					mensaje = "No se viaja";
					break;
				case "Cataratas":
				case "Mar del plata":
					mensaje = "Se viaja";
					break;
			}break;
		case "Otoño":
			mensaje = "Se viaja";
			break;
		case "Primavera":
			switch(destino)
			{
				case "Bariloche":
					mensaje = "No se viaja";
					break;
				case "Cataratas":
				case "Cordoba":
				case "Mar del plata":
					mensaje = "Se viaja";
					break;
			}break;
	}//fin de switch estacion//

	alert(mensaje);
	

}//FIN DE LA FUNCIÓN