/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let clave;

	clave = prompt("ingrese la clave");

	while(clave != "utn750")
	{
		alert("clave incorrecta \n Ayuda: Es `utn750`");
		clave = prompt("ingrese la clave");
	}
	
}//FIN DE LA FUNCIÓN
