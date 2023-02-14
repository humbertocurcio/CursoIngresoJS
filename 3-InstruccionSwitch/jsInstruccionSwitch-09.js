function mostrar()
{
	let destino;
	let estacion;
	let porcentaje;
	let PrecioFinal
	let precio;
	let mensaje;

	precio = 15000;
	porcentaje = 0;
	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById ("txtIdDestino").value;

	switch(estacion)
	{
		case "Invierno":
			switch(destino)
			{
				case "Bariloche":
					porcentaje = 20;
					break;
				case "Cataratas":
				case "Cordoba":
					porcentaje = -10;
					break;
				case "Mar del plata":
					porcentaje = -20;
					break;
			}
			break;
		case "Verano":
			switch(destino)
			{
				case "Bariloche":
				porcentaje = -20;
					break;
				case "Cataratas":
				case "Cordoba":
					porcentaje = 10;
					break;
				case "Mar del plata":
					porcentaje = 20;
					break;
			}			
			break;
		case "otoño":
		case "Primavera":
			switch(destino)
			{
				case "Bariloche":
				porcentaje = 10;
					break;
				case "Cataratas":
					porcentaje = 10;
				case "Cordoba":
					porcentaje = 0;
					break;
				case "Mar del plata":
					porcentaje = 10;
					break;
			}break;
	}//fin de switch estacion//
	PrecioFinal = precio + precio*porcentaje/100;

	mensaje = "El precio final es $" + PrecioFinal;

	alert(mensaje);
}//FIN DE LA FUNCIÓN