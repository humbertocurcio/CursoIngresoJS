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
		case "Mar del plata":
			mensaje = "està al este";
			break;
		case "Ushuaia":
			mensaje = "està al sur";
			break;
	}
	alert(mensaje);
}//FIN DE LA FUNCIÓN