/*
Santiago Ruiz Diaz DIV E
E/S ej 9
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
   //declaramos variables
   var sueldo;
   var resultado;
   var aumento;

   //traer los valores por Id
   sueldo = document.getElementById("txtIdSueldo").value;
   //resultado = document.getElementById("txtIdResultado").value;

   // parseamos el valor 
   sueldo = parseFloat(sueldo);

   aumento = 10/100;
   resultado = sueldo + sueldo*aumento;


   //devuelvo resultado
   document.getElementById("txtIdResultado").value = resultado;


}
