/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{

	let numero;
	let promPositivos = 0;
	let promNegativos = 0;
	let diferenciaPosNeg;
	let contadorPositivos = 0;
	let contadorNegativos = 0;
	let contadorCeros = 0;
	let contadorPares = 0;
	let acumuladorPositivos = 0;
	let acumuladorNegativos = 0;
	let respuesta = 's';


	while(respuesta == 's')
	{
		numero = parseFloat(prompt("ingrese un nùmero: "));

		if(numero == 0)
		{
			contadorCeros++;

		}else if(numero < 0)
		{
			acumuladorNegativos+= numero;
			contadorNegativos++;
		}
		else
		{
			acumuladorPositivos+= numero;
			contadorPositivos++;
		}
		
		if(numero % 2 == 0)
		{
			contadorPares++;
		}

		respuesta = prompt("desea ingresar otro nùmero? ");
	}
	if(contadorPositivos > 0)
	{
		promPositivos = acumuladorPositivos / contadorPositivos;
	}
	if(contadorNegativos > 0)
	{
		promNegativos = acumuladorNegativos / contadorNegativos;
	}
	diferenciaPosNeg = contadorPositivos - contadorNegativos;

	document.write(
		"La suma de negativos es " + acumuladorNegativos + "<br>" + 
		"La suma de positivos es " + acumuladorPositivos + "<br>" +
		"La cantidad de positivos es " + contadorPositivos + "<br>" +
		"La cantidad de negativos es " + contadorNegativos + "<br>" +
		"La cantidad de ceros es " + contadorCeros + "<br>" +
		"La cantidad de numeros pares " + contadorPares + "<br>" +
		"El promedio de los positivos es  " + promPositivos + "<br>" +
		"El promedio de los negativos es " + promNegativos + "<br>" +
		"La diferencia entre positivos y negativos es  " + diferenciaPosNeg);

}//FIN DE LA FUNCIÓN