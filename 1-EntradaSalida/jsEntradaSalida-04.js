/* 
Santiago Ruiz Diaz DIV E
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
    //creo la variable
    var nombreIngresado;

    //defino la variable como en el ejerccio 2 
    nombreIngresado=prompt("Ingrese su nombre");

    //defino el ID desde la variable, que esta determinada por el prompt
    document.getElementById("txtIdNombre").value = nombreIngresado

    // doy el valor de la variable 
    alert(nombreIngresado);
}