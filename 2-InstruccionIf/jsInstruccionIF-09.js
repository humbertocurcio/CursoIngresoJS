function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	let numAleat;
	const NMAX = 10;
	const NMIN = 1;

	numAleat = Math.round( Math.random() * (NMAX - NMIN) + NMIN);

	alert(numAleat);	


	

}//FIN DE LA FUNCIÓN