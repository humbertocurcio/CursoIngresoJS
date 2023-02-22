/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let contNegativos;
	let numeroIngresado;
	let sumaPositivos;
	let mulNegativos;
	let respuesta;

	
	sumaPositivos = 0;
	mulNegativos = 1;
	contNegativos = 0;
	respuesta = `s`;
	
	while(respuesta == `s`)
	{
		numeroIngresado =parseFloat(prompt("ingrese un numero: "));

		if(numeroIngresado >= 0)
		{
			sumaPositivos += numeroIngresado;
		}else
		{
			contNegativos ++;
			mulNegativos *= numeroIngresado;
		}
		
		respuesta = prompt("desea ingresar otro nùmero s/n?");
	}
	if(contNegativos == 0)
	{
		mulNegativos = 0;
	}
	
	document.getElementById("txtIdSuma").value = sumaPositivos;
	document.getElementById("txtIdProducto").value = mulNegativos;
	
}//FIN DE LA FUNCIÓN