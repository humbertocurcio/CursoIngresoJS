/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	
	let numeroIngresado;
	let sumaPositivos;
	let mulNegativos;
	let respuesta;
	let flag;

	
	sumaPositivos = 0;
	mulNegativos = 1;
	respuesta = `s`;
	flag = true;
	
	while(respuesta == `s`)
	{
		numeroIngresado =parseFloat(prompt("ingrese un numero: "));

		if(numeroIngresado >= 0)
		{
			sumaPositivos += numeroIngresado;
		}else
		{
			flag = false;
			mulNegativos *= numeroIngresado;
		}
		
		respuesta = prompt("desea ingresar otro nùmero s/n?");
	}
	if(flag == true)
	{
		mulNegativos = 0;
	}
	
	document.getElementById("txtIdSuma").value = sumaPositivos;
	document.getElementById("txtIdProducto").value = mulNegativos;
	
}//FIN DE LA FUNCIÓN