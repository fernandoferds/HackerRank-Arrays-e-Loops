function solucao(precos) {

    let precoTotal = 0;
    let produtoBarato = precos[0];

    for (let i = 0; i < precos.length; i++) {
        precoTotal = precoTotal + precos[i];
        if (produtoBarato > precos[i]) {
            produtoBarato = precos[i];
        }

    }

    if (precos.length >= 5) {
        precoTotal = precoTotal - produtoBarato;
        console.log(precoTotal);


    } else {

        console.log(precoTotal);

    }

}