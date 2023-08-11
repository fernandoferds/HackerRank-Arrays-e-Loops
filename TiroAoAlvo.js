

function solucao(disparos) {
    let acertos = 0;
    for (let i = 0; i < disparos.length; i++) {
        if (disparos[i] >= 70) {
            acertos = acertos + 1;
        }
    }
    if (acertos >= 3) {
        console.log(acertos);
    } else {
        console.log(`ELIMINADO`);
    }

}