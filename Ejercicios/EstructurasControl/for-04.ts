/* 2. Hacer un programa que, 
dado un número te de las tablas de multiplicar
 del 1 al número dado. 
Ej. número dado 3
Tabla de multiplicar del 1: 1x1=1, 1x2=2, …, 1x10=10
Tabla de multiplicar del 2: 2x1=2, …, 2x10=20!
Tabla de multiplicar del 3: 3x1=3, …, 3x10=30 */

function tablasDeMultiplicar(a: number) {
    let counter=0;
    let tabla: number = 0;
    for (let i = 1; i <= a; i++) {
        for (let tabla = 1; tabla <= 10; tabla++) {
            counter++
            console.log(`${i} X ${tabla} = ${i*tabla}`)
        }
      // console.log(`${tabla} X ${i} = ${tabla * i}`)
    
    }
}
tablasDeMultiplicar(5);