/*
Santiago Ruiz Diaz DIV E
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
    // se define la variable 
	var nombreIngresado;
    
    //se define la variable, pero a diferencia del ejercicio 2, el texto no se ingresa en una ventana emergente, sino en un campo ya preestablecido
	nombreIngresado=txtIdNombre.value;
	
	// lo mostramos por alert
	alert( "su nombre es " + nombreIngresado);

}


