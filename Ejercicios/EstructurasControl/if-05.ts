/*Los alumnos de un curso de han dividido
* en dos grupos A y B de acuerdo al sexo y el nombre.
*el grupo a esta formado por las mujeres con un nombre anterior a la M 
*y los hombres por un nombre posterior a la N y el grupo B por el resto.
*/
/* ESCRIBIR UN PROGRAMA QUE INDIQUE EL NOMBRE Y SEXO Y MUESTRE POR 
PANTALLA EL GRU QUE LE CORRESPONDE 
*/
function groupAge (name:string, genero:string) {
if (genero=="F" && name < "m") {
    console.log ("Tu grupo es el A");
} else if (genero=="M" && name > "n") {
    console.log ("Tu grupo es el B");
}
console.log (`"Tu nombre es ${name}, sexo ${genero}"`);
}
groupAge ("joss","F");