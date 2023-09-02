function counterWord(text: string, word: string) {
    let counter = 0;
    let i: number = 0;
    while (i <= text.length) {
        let sliceWord = "";
        const lengthForWord = word.length;
        for (let pointer = i; pointer <= lengthForWord; pointer++) {
            let aux = pointer;
            sliceWord = `${text.charAt(i + 1)}`
        }
        const actuallyChar = text.charAt(i);
        const nextChar = text.charAt(i + 1);
        if (word === `${actuallyChar}${nextChar}`) {
            counter++
        }
        console.log(sliceWord);
        i++
    }
    console.log(`El enunciado contiene ${counter} coincidencias con ${word}`)
}
const text = `tal vez no mi mi mi existas
ante la duda un sueño
¡cariño! ¡mi vida! criatura de rubí
tal vez no fuíste... ¡dímelo!
ese recorte en verso
división con diestra
cada frase con sigilo,
¡sí! cae triste melodía
y no existe huella y tu carta me nubló...`;
const word = `mi`;
counterWord(text, word);