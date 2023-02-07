function mostrar()
{
	let numRandom;

	numRandom = Math.round(Math.random()*10);

	if(numRandom >=9)
	{
		alert(numRandom +" excelente");
	}
	else
	{
		if(numRandom >=4)
		{
			alert(numRandom +" aprobado");
		}
		else
		{
			alert(numRandom + " vamos, la proxima se puede");
		}
	}


	

}//FIN DE LA FUNCIÓN