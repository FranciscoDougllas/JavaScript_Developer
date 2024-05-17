//Funcao que escreve o nome
function meuNome(nome){
    return `Meu nome e ${nome}`;
}

let nome = 'Francisco Douglas';
console.log(meuNome(nome));

//Funcao verifica idade maior menor
function verificaIdade(idade){
    if(idade < 18){
        return `Voce tem apenas ${idade} anos voce e menor de idade`;
    }else if(idade >= 18){
        return `Voce tem ${idade} anos, ja e maior de idade`;
    }else{
        return `Não foi possivel verifica sua idade, verifique os dados ${idade}`
    }
}

let idade = 29;
console.log(verificaIdade(idade));