function mostrar()
{
	let contador;
	let acumulador;
	let numeroIngresado;
	

	contador=0;
	acumulador=0;

	while(contador < 5)
	{
		numeroIngresado = parseFloat(prompt("ingrese un numero"));
		acumulador += numeroIngresado;
		contador ++
	}
	
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador / contador



	

}//FIN DE LA FUNCIÓN