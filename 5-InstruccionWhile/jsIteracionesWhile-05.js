/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado;

	sexoIngresado = prompt("ingrese f para femenino ó m para masculino");

	while (sexoIngresado != `f` && sexoIngresado != `m`)
	{
		sexoIngresado = prompt("ingrese f para femenino ó m para masculino");
	}
	document.getElementById("txtIdSexo").value = sexoIngresado


	
}//FIN DE LA FUNCIÓN