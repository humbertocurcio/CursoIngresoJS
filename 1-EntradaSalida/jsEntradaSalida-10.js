/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/

/*
Ejercicio 10.bis: Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
pedirle al usuario un % de descuento y mostrar el importe en el cuadro de texto "RESULTADO"
*/

function mostrarAumento()
{
	let importe
	let descuento 
	let nuevoImporte

	importe = document.getElementById ("txtIdImporte").value;

	importe = parseFloat (importe);

	descuento = importe * (25 / 100);

	nuevoImporte = importe - descuento;

	document.getElementById ("txtIdResultado").value = nuevoImporte;
	

	
}
