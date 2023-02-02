/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/

/*Ejercicio 3.bis: Ingresar descripción (por prompt) y precio de un producto (por id).
El programa deberá mostrar por alert la descripción del producto 
junto al precio aumentado en un 30%. 
Pueden utilizar el html del ejercicio 3 para resolverlo.*/

function mostrar()
{
	
	let descripción
	let precioProd
	let aumento 
	let nuevoPrecio

	descripción = prompt ("descripciòn de producto");
	
	precioProd = document.getElementById ("txtIdNombre").value;

	precioProd = parseFloat (precioProd);

	aumento = precioProd * (30 / 100);

	nuevoPrecio = precioProd + aumento
	

	alert(descripción + " " + nuevoPrecio); 
}


