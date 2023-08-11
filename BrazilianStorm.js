

function solucao(notas) {
    let maior = -1;
    let menor = 101;
    let media = 0;

    for (let i = 0; i < notas.length; i++) {
        if (notas[i] > maior) {
            maior = notas[i];
        } else if (notas[i] < menor) {
            menor = notas[i];
        }
        media = media + notas[i];
    }

    if (notas.length <= 2) {
        media = media / notas.length;
    } else {
        media = ((media - menor) - maior) / (notas.length - 2);
    }
    console.log(media);

}