function contarLetras(texto: string, letra: string) {
    let counter = 0;
    let i: number = 0;
    while (i <= texto.length) {
        if (texto.charAt(i).toLowerCase() == letra.toLowerCase()) {
            counter++
        } i++
    }
    console.log(`El texto  ${texto} tiene ${counter} letras "${letra}"`)
}
contarLetras(`Etiam pretium eros non quam lacinia,
 vitae fringilla lorem faucibus. Proin elementum pretium lacinia.
  Nunc quis turpis faucibus, lacinia erat at, venenatis dolor. 
  Nunc justo erat, dapibus id nunc ac, maximus pretium quam. 
  Phasellus sit amet venenatis erat. 
  Donec a eros sit amet dui dignissim vehicula non gravida justo. 
  Aliquam erat volutpat.`, `n`)