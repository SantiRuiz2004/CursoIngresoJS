/*
Santiago Ruiz Diaz DIV E
E/S Ej 10
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
// declaro las variables
var importe;
var resultado;
var descuento;

//traigo los valores por Id
importe = document.getElementById("txtIdImporte").value;

//parseamos el valor
importe = parseFloat(importe);

//calculamos el descuento
descuento = importe * 25/100;
resultado = importe - descuento;

//mostramos el resultado por Id
document.getElementById("txtIdResultado").value = resultado;


}
