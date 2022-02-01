/*
Santiago Ruiz Diaz DIV E
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	alert("ok");
 
 //defino la primera variable
    var nombreIngresado;

//defino la segunda variable
    var edadIngresada;

//como en el ejercicio 3, extraigo ambos valores para las variables
    nombreIngresado = document.getElementById("txtIdNombre").value;


    edadIngresada = document.getElementById("txtIdEdad").value;

//uno varias strings con las variables, para obtener el texto
    alert("Su nombre es " + nombreIngresado + " y tiene " + edadIngresada + " años");

} 

