/*
Santiago Ruiz Diaz DIV E
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//declaramos variables
	var numUno;
	var numDos;
	var resultado;

   
	numUno = document.getElementById("txtIdNumeroUno").value;
	numDos = document.getElementById("txtIdNumeroDos").value;

    //parseInt para combertir el valor texto a un valor numerico
    numUno = parseInt (numUno);
    numDos = parseInt (numDos);

// en caso de decimales se usa parseFloat, ej: numUno = parseFloat (numUno);

	resultado = numUno + numDos

    // muestro los resultados por alert 
	alert(resultado);
}

/*
operadores

+ - * / %

entrada:
-promt
-id

salida:
-alert
-id
-document.write


*/
