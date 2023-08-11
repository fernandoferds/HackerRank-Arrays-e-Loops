function solucao(resultados) {
    let pontos = 0;

    for (let i = 0; i < resultados.length; i++) {
        if (resultados[i] === 'V') {
            pontos = pontos + 3;
        } else if (resultados[i] === 'E') {
            pontos = pontos + 1;
        }
    }
    console.log(pontos);
}