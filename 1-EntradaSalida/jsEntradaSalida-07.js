/*
Santiago Ruiz Diaz DIV E
E/S ej 7
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	//declaramos la variables
	var numUno;
	var numDos;
	var resultado;	

	numUno = document.getElementById("txtIdNumeroUno").value;
	numDos = document.getElementById("txtIdNumeroDos").value;

	numUno = parseInt (numUno);
	numDos = parseInt (numDos);

	resultado = numUno + numDos

	alert( "la suma es " + resultado);
}

function restar()
{
	var numUno;
	var numDos;
	var resultado;

    numUno = document.getElementById("txtIdNumeroUno").value;
	numDos = document.getElementById("txtIdNumeroDos").value;

    numUno = parseInt (numUno);
	numDos = parseInt (numDos);

	resultado = numUno - numDos

	alert(" la resta es " +resultado)

}

function multiplicar()
{ 
	var numUno;
    var numDos;
    var resultado;

    numUno = document.getElementById("txtIdNumeroUno").value;
	numDos = document.getElementById("txtIdNumeroDos").value;

    numUno = parseInt (numUno);
	numDos = parseInt (numDos);

	resultado = numUno * numDos

	alert("la multiplicacion es " + resultado);


}

function dividir()
{
	var numUno;
    var numDos,
    

    numUno = document.getElementById("txtIdNumeroUno").value;
	numDos = document.getElementById("txtIdNumeroDos").value;

    numUno = parseInt (numUno);
	numDos = parseInt (numDos);

	resultado = numUno / numDos

	alert("la division es " + resultado);

}

