
function solucao(letra, palavras) {

    let erros = 0;

    for (let i = 0; i < palavras.length; i++) {

        let primeiraLetra = palavras[i];
        if (primeiraLetra[0] !== letra) {
            erros++;
        }
    } console.log(erros)

}