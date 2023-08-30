function wordCounter(text: string): void {
    text = text.toLowerCase();
    let palabraContador = 0;
    let letraContador = 0;
    let esPalabra = false;

    for (let i = 0; i < text.length; i++) {
        if (text[i] !== ' ' && text[i] !== '\n' && text[i] !== '\t') {
            if (!esPalabra) {
                esPalabra = true;
                palabraContador++;
            }
            letraContador++;
        } else {
            esPalabra = false;
        }
    } console.log (`El texto tiene ${palabraContador} palabras ${letraContador} letras en total`)
}
wordCounter("Hola mi nombre es Joselin")