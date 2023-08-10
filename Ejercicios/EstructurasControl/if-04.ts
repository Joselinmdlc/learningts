//Aqui irà un nuevo ejercicio.
/*Para tributar un determinado impuesto se debe ser mayor de 16 a y tener unos ingresos
* iguales o superiores a 1000 MXN mensuales. Escribir un programa que de acuerdo a su 
edad y sus ingresos mensuales muestre por pantalla si el usuario tiene que tributar o no.
*/
function thePersonTribute(userAge: number, ingresos: number) {
    if (userAge > 16 && ingresos >= 1000) {
        console.log ("El usuario puede tributar");
    }
    else   {
     console.log("El usuario no puede tributar");
    }

}
thePersonTribute(17, 2000); 