function mostrar()
{
	let destino;

	destino = document.getElementById("txtIdDestino").value;

	switch(destino)
	{
		case "Bariloche":
			alert("està en el oeste");
			break;
		case "Cataratas":
			alert("està al norte");
			break;
		case "Mar del Plata":
			alert("està al este");
			break;
		case "Ushuaia":
			alert("està al sur");
			break;
	}
}//FIN DE LA FUNCIÓN