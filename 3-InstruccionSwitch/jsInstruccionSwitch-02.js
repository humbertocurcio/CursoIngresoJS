function mostrar()
{
	let mesAnio;

	mesAnio = document.getElementById("txtIdMes").value;

	switch(mesAnio)
	{
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Mayo":
		case "Abril":
		case "Junio":
			alert("Falta para el invierno");
			break;
		case "Julio":
		case "Agosto":
			alert("abrigate que hace frio");
			break;
		default:
			alert("ya pasamos el frio, ahora el calor");
	}
		




}//FIN DE LA FUNCIÓN