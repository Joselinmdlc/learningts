/* Suma de Digitos.
Crear un programa que al ingresar una cantidad numerica
 sume todos los digitos y nos de el resultado. 
Ej: Cantidad ingresada: 8654324
resultado 32 
Consideraciones: Se debe usar el parse de tipos. */

function sumaDeDigitos(num: number) {
    let suma: number = 0;
    const cadenaDeNumero = num.toString();
    // let num2: number = parseInt(num);
    for (let i = 0; i < cadenaDeNumero.length; i++) {
        suma += parseInt(cadenaDeNumero.charAt(i)); 
    }
console.log(`Tu suma es ${suma}`)
}
sumaDeDigitos(8654324)