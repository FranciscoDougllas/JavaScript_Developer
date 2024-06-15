"use strict";

var nome = 'Francisco Douglas';
var idade = 29;

if (nome === 'Francisco Douglas' && idade > 18) {
  console.log("O Nome e ".concat(nome, " ele e Maior de Idade pois tem ").concat(idade, " anos"));
} else {
  console.log("O Nome e ".concat(nome, " ele e Menor de Idade pois tem ").concat(idade, " anos"));
}

var valor = 120;

if (valor > 100) {
  var desconto = valor - 100;
  console.log('O Desconto sera de ' + desconto);
} else if (valor < 100) {
  console.log('O Preco e Igual ou menor que 100 nao tera desconto');
} else {
  console.log('Invalido!!');
}