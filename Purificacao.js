function solucao(stringCorrompida) {

    let dadoPurificado = '';
    let i = 0;

    for (let caractere of stringCorrompida) {
        if (caractere === '!' || caractere === '@' || caractere === '#' || caractere === '$' || caractere === '%' || caractere === '&' || caractere === '*' || caractere === '(' || caractere === ')' || caractere === '_' || caractere === '.') {

        } else {

            dadoPurificado = dadoPurificado + caractere;

        }

    }
    console.log(dadoPurificado);

}