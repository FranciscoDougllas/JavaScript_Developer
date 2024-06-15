"use strict";

var douglas = {
  nome: 'Francisco Douglas',
  idade: 29,
  descrever: function descrever() {
    console.log("Meu nome e ".concat(this.nome, " e minha idade e ").concat(this.idade));
  }
};
console.log(douglas.nome);
console.log(douglas.idade);
console.log(douglas);
douglas.altura = 1.67;
douglas.peso = 85;
console.log(douglas.peso);
console.log(douglas.altura);
console.log(douglas);
delete douglas.peso;
console.log(douglas); //Criando metodos para o Objeto metodos

var pessoa = {
  nome: 'Francisco Douglas',
  idade: 29,
  descrever: function descrever() {
    console.log("Meu nome e ".concat(this.nome, " e minha idade e ").concat(this.idade));
  }
};
pessoa.descrever();
pessoa.nome = 'Laurice';
pessoa.idade = 27;
pessoa.descrever(); //Funcao para objetos

pessoa.descrever = function () {
  console.log("Meu nome e ".concat(this.nome));
};

pessoa.descrever(); //Outro exemplo

var atributo = "idade";
console.log(pessoa[atributo]);