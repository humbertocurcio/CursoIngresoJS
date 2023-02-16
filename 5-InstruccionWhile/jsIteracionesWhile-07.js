/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let contador;
	let acumulador;
	let respuesta;
	let numeroIngresado;

	contador = 0;
	acumulador = 0;
	respuesta = `S`;

	

	while (respuesta == `S`)
	{
		numeroIngresado = parseFloat(prompt("Ingrese un numero"));
		acumulador = acumulador + numeroIngresado;
		contador = contador + 1;
		respuesta = prompt("desea ingresar otro numero? S/N");
	}

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador / contador;



	

}//FIN DE LA FUNCIÓN