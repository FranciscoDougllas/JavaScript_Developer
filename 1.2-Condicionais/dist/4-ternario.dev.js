"use strict";

var nome = 'Francisco';
var pagador = true;
var dinheiro = false;
var disciplina = true;
console.log("O Cliente ".concat(nome, " ").concat(pagador ? "E bom pagador." : "Não e bom pagador"));
console.log("O ".concat(nome, " ").concat(dinheiro ? 'Tem dinheiro na conta' : 'Não tem Dinheiro na conta'));
console.log("O ".concat(nome, " e ").concat(disciplina ? 'Disciplinado' : 'Não tem disciplina')); //Maior de idade

var idade = 16;
var sexo = 'F';
console.log("".concat(idade >= 18 && sexo === 'M' ? 'Maior de Idade' : 'Menor de Idade'));