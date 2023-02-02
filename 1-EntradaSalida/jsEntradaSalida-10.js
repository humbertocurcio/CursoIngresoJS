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
	let porcentaje 
	let nuevoImporte
	let porcentajeAModificar
	

	importe = document.getElementById ("txtIdImporte").value;

	importe = parseFloat (importe);

	porcentajeAModificar = prompt ("asigne un porcentaje");

	 nuevoImporte = importe - porcentajeAModificar;

	document.getElementById ("txtIdResultado").value = nuevoImporte; 
	

	
}
