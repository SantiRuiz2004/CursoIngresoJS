/*
Santiago Ruiz Diaz DIV E
E/S ej 8
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
   //declarar las variables
   var dividendo;
   var divisor;
   var resto;

   //traemos los valores por Id
   dividendo = document.getElementById("txtIdNumeroDividendo").value;
   divisor = document.getElementById("txtIdNumeroDivisor").value;

   //los transformo a enteros
   dividendo = parseInt(dividendo);
   divisor = parseInt(divisor);

   resto = dividendo % divisor; 

   alert("el resto de la division es " + resto);



















}
