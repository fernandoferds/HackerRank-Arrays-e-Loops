

function solucao(sequencia) {


    let posicaoAtual = 0;

    for (let i = 0; i < sequencia.length; i++) {
        if (sequencia[i] === '>') {
            if (posicaoAtual + 1 > 6) {
                posicaoAtual = 0;
            } else {
                posicaoAtual = posicaoAtual + 1;
            }
        } else if (sequencia[i] === '<') {
            if (posicaoAtual - 1 < 0) {
                posicaoAtual = 6;
            } else {
                posicaoAtual = posicaoAtual - 1;
            }
        }
    }

    console.log(posicaoAtual);

}