/*Escribir un programa para una empresa que tiene salas 
*de juegos para todas las edades y quiere calcular de forma automatica
el precio que debe cobrar a sus clientes por entrar. el programa
* de acuerdo a la edad del cliente debe mostrar el precio de la entrada.
*Si el cliente es menor de 4 años puede entrar gratis, si tiene entre 4 y 18 
*años debe de pagar 30 mxn y si es mayor de 18 años, 1000 mxn */

function gamesUsers(userAge:number){
    if (userAge<4) {
        console.log ("Entrada gratis")
    }
    else if (userAge >=4 && userAge <18) {
        console.log("Debe de pagar 30 mxn")
    } else {
        console.log("Debe pagar 1000 mxn")
    }
}
gamesUsers(19);