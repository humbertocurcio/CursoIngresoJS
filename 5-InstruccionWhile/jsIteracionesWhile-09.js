/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	let maximo;
	let minimo;
	let numero;
	let respuesta;
	let contador;

	contador = 0;
	respuesta = `s`;

	while(respuesta == `s`)
	{
		numero = parseFloat(prompt("Ingrese un nùmero; "));
		if(contador == 0)
		{
			maximo = numero;
			minimo = numero;
			contador = 1;
		}
		if(numero > maximo)
		{
			maximo = numero;
		}
		else if(numero < minimo)
		{
			minimo = numero;
		}
		

		respuesta = prompt("desea ingresar otro nùmero? s/n");
	}

	

	document.getElementById("txtIdMaximo").value = maximo;
	document.getElementById("txtIdMinimo").value = minimo;

}//FIN DE LA FUNCIÓN