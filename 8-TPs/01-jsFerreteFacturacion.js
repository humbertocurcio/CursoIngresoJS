/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let precioUno
    let precioDos
    let precioTres
    let suma

    precioUno = document.getElementById ("txtIdPrecioUno").value;
    precioUno = parseFloat (precioUno);

    precioDos = document.getElementById ("txtIdPrecioDos").value;
    precioDos = parseFloat (precioDos);

    precioTres = document. getElementById ("txtIdPrecioTres").value;
    precioTres = parseFloat (precioTres);

    suma = "La suma de precios es " + (precioUno + precioDos + precioTres);
    
    alert(suma);
	
}
function Promedio () 
{
    let precioUno
    let precioDos
    let precioTres
    let promedio

    precioUno = document.getElementById ("txtIdPrecioUno").value;
    precioUno = parseFloat (precioUno);

    precioDos = document.getElementById ("txtIdPrecioDos").value;
    precioDos = parseFloat (precioDos);

    precioTres = document. getElementById ("txtIdPrecioTres").value;
    precioTres = parseFloat (precioTres);

    promedio = "el promedio de los precios es " + (precioUno + precioDos + precioTres)/3;

    alert(promedio);

	
}
function PrecioFinal () 
{
	let precioUno
    let precioDos
    let precioTres
    let precioFinalUno
    let precioFinalDos
    let precioFinalConIVA

    precioUno = document.getElementById ("txtIdPrecioUno").value;
    precioUno = parseFloat (precioUno);

    precioDos = document.getElementById ("txtIdPrecioDos").value;
    precioDos = parseFloat (precioDos);

    precioTres = document. getElementById ("txtIdPrecioTres").value;
    precioTres = parseFloat (precioTres);

    precioFinalUno = (precioUno + precioDos + precioTres);
    precioFinalDos = precioFinalUno + precioFinalUno * 0.21;

    precioFinalConIVA =  "El precio final mas IVA (21%) es " + precioFinalDos;

    alert(precioFinalConIVA); 
}
