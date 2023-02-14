function mostrar()
{
	let destino;
	let mensaje;

	destino = document.getElementById("txtIdDestino").value;

	switch(destino)
	{
		case "Bariloche":
			mensaje = "està en el oeste";
			break;
		case "Cataratas":
			mensaje = "està al norte";
			break;
		case "Mar del Plata":
			mensaje = "està al este";
			break;
		case "Ushuaia":
			mensaje = "està al sur";
			break;
	}
}//FIN DE LA FUNCIÓN