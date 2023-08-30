//programa que corra del 100 al mil
// dividir por la unidad el 100 entre 1
//crear una variable que vaya incrementando que llegue a 10 se resetee a 0 
// cada 10 conteos 
//cuando llegue al 110 va a valer 0
// cuando llegue a 200 va a valer 10 
// cuando legue al 300 va valer 21 22 23

//si el contadpr de for es par se imprime
// coincidir si el contador externo tambein es par
// si ninguna es par no imprimir

//pista una variable se inicia afuera
function counterParInpar() {
    let counter = 0;
    for (let i = 100; i <= 1000; i = i + 1) {
        if (i >= 100 && i < 200) {
            if (counter >= 10) {
                counter = 0;
            }
        } else if (i >= 200 && i < 300) {
            if (counter >= 20) {
                counter = 10;
            }
        } else if (i >= 300 && i < 400) {
            if (counter >= 30) {
                counter = 20;
            }
        } else if (i >= 400 && i < 500) {
            if (counter >= 40) {
                counter = 30;
            }
        } else if (i >= 500 && i < 600) {
            if (counter >= 50) {
                counter = 40;
            }
        } else if (i >= 600 && i < 700) {
            if (counter >= 60) {
                counter = 50;
            }
        } else if (i >= 700 && i < 800) {
            if (counter >= 70) {
                counter = 60;
            }
        } else if (i >= 800 && i < 900) {
            if (counter >= 80) {
                counter = 70;
            }
        } else if (i >= 900 && i < 1000) {
            if (counter >= 90) {
                counter = 80;
            }
        }
        const isPar = counter % 2 === 0;
        const isParI = i % 2 === 0;
        counter = counter + 1;
        if (isPar && isParI) {
            console.log(`Contador interno "${(i)}" y el contador externo "${counter - 1}" son par`)
        }
    }
}
counterParInpar();