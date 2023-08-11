
function solucao(primeiraLetra, segundaLetra, palavras) {
    let verifica = [""];
    let palavrasCertas = 0;
    for (let i = 0; i < palavras.length; i++) {
        verifica = palavras[i];
        if (verifica[0] === primeiraLetra && verifica[1] === segundaLetra) {
            console.log(palavras[i]);
            palavrasCertas++;
        }
    }
    if (palavrasCertas === 0) {
        console.log(`NENHUMA`);
    }
}