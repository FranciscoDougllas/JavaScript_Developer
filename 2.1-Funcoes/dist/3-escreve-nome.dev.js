"use strict";

//Funcao que escreve o nome
function meuNome(nome) {
  return "Meu nome e ".concat(nome);
}

var nome = 'Francisco Douglas';
console.log(meuNome(nome)); //Funcao verifica idade maior menor

function verificaIdade(idade) {
  if (idade < 18) {
    return "Voce tem apenas ".concat(idade, " anos voce e menor de idade");
  } else if (idade >= 18) {
    return "Voce tem ".concat(idade, " anos, ja e maior de idade");
  } else {
    return "N\xE3o foi possivel verifica sua idade, verifique os dados ".concat(idade);
  }
}

var idade = 29;
console.log(verificaIdade(idade));