function wordCounter(text: string): void {
    text = text.toLowerCase();
    let palabraContador = 0;
    let letraContador = 0;
    let esPalabra = false;
    let i: number = 0;

    while (i < text.length) {
        if (text[i] !== ' ' && text[i] !== '\n' && text[i] !== '\t') {
            if (!esPalabra) {
                esPalabra = true;
                palabraContador++;
            }
            letraContador++;
        } else {
            esPalabra = false;
        } i++
    } console.log(`El texto tiene ${palabraContador} palabras ${letraContador} letras en total`)
}
wordCounter("Hola mi nombre es escribe Joselin")