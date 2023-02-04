/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/


function Rectangulo () 
{

    let ancho;
    let largo;
    let perimetro;
    let  metrosAlambre;

    ancho = document.getElementById ("txtIdAncho").value;
    ancho = parseFloat (ancho);

    largo = document.getElementById ("txtIdLargo").value;
    largo = parseFloat (largo);

    perimetro = (ancho + largo) * 2; 

    metrosAlambre = perimetro * 3; 

    alert ("Se necesitan " + metrosAlambre + " metros de alambre para el terreno");


}
function Circulo () 
{
  
    let perimetro;
    let radio;
    let alambre;
    const PI = 3.14;

    radio = document.getElementById ("txtIdRadio").value;
    radio = parseFloat (radio);

    perimetro = 2 * PI * radio; 

    alambre = perimetro * 3;

    alert(" se necesitan " + perimetro + " metros de alambre para la circunferencia");

	
}
function Materiales () 
{
    let ancho;
    let largo;
    let area;
    let cemento;
    let cal;

    
    ancho = document.getElementById ("txtIdAncho").value;
    ancho = parseFloat (ancho);

    largo = document.getElementById ("txtIdLargo").value;
    largo = parseFloat (largo);

    area = ancho * largo; 

    cemento = area * 2;
    cal = area * 3;

    alert ("Para un contrapiso de " + area + "m2, se necesitan " + cemento + " bolsas de cemento y " + cal + " bolsas de cal");


	
}