function counterWord(text: string, word: string) {
    let counter = 0;
    let i: number = 0;
    while (i <= text.length) {
        let sliceText = "";
        const lengthForWord = word.length - 1;
        for (let pointer = 0; pointer <= lengthForWord; pointer++) {
            const aux = i + pointer;
            sliceText = `${sliceText}${text.charAt(aux)}`
        }
        if (sliceText === word) {
            counter++;
        }
        sliceText = "";
        i++
    }
    console.log(`El enunciado contiene ${counter} coincidencias con ${word}`)
}
const text = `tal vez no existas
ante la duda un sueño
¡cariño! ¡mi vida! criatura de rubí
tal vez no fuíste... ¡dímelo!
ese recorte en verso verso verso verso
división con diestra
cada frase con sigilo,
¡sí! cae triste melodía
y no existe huella y tu carta me nubló...`;
const word = `verso`;
counterWord(text, word);
