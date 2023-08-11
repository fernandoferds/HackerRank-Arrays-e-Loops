

function solucao(precos) {

    let minIntervalo = 999999999999999;


    for (let i = 0; i < precos.length; i++) {

        for (let u = i + 1; u < precos.length; u++) {

            if (precos[i] > precos[u]) {

                const intervalo = precos[i] - precos[u];

                if (intervalo < minIntervalo) {
                    minIntervalo = intervalo;

                }
            }
        }
    } console.log(minIntervalo);

}