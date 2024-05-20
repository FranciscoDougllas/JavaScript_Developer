//Funcao de print
function print(texto){
    console.log(texto);
}

//Function calcula media
function calculaMedia(notas){
    if(notas.length === 0){
        return "Nenhuma nota foi fornecida. Impossivel calcula a media";
    }
    const somaNotas = notas.reduce((acc, nota) => acc + nota, 0);
    const media = somaNotas / notas.length;

    return `A Media das Notas e; ${media.toFixed(2)}`;
}



//Maior par e Menor Impar
function parImpar(numeros){
    let maiorPar = Infinity;
    let menorImpar = Infinity;

    for(const numero of numeros){
        if(numero % 2 === 0){
            maiorPar = Math.max(maiorPar, numero);
        }else{
            menorImpar = Math.min(menorImpar, numero);
        }
    }
    return {
        maiorPar, menorImpar
    };
}

module.exports = {
    calculaMedia,
    print,
    parImpar,
}