/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	let maximo;
	let minimo;
	let numero;
	let respuesta;
	let flag;

	contador = 0;
	respuesta = 's';
	flag = true;

	

	while(respuesta == 's')
	{
		numero = parseFloat(prompt("Ingrese un nùmero; "));

		if(flag == true || numero > maximo)
		{
			maximo = numero;
		}
		if(flag == true || numero < minimo)
		{
			minimo = numero;
			flag = false;
		}	

		/*if(flag == true)
		{
			maximo = numero;
			minimo = numero;
			flag = false;
		}
		if(numero > maximo)
		{
			maximo = numero;
		}
		else if(numero < minimo)
		{
			minimo = numero;
		}*/
		

		respuesta = prompt("desea ingresar otro nùmero? s/n");
	}

	

	document.getElementById("txtIdMaximo").value = maximo;
	document.getElementById("txtIdMinimo").value = minimo;

}//FIN DE LA FUNCIÓN