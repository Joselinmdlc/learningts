/*1. Hacer un programa que dado dos números
 dibuje una escalera del nivel de los números. 
 El primero debe ser el inicio y el segundo el final.
Ej. número 1: 6 y numero 2: 10*/

function escaleraDeNumeros(a: number, b: number) {
    let repet: number;
    let cad: string = ``
    let i: number = a;
    while (i <= b) {

        for (repet = 0; repet < i; repet++) {
            cad = `${cad}${i}`
        }
        console.log(cad)
        cad = ``;
        i++
    }
}
escaleraDeNumeros(5, 20);