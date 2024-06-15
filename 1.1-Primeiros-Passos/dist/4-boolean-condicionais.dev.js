"use strict";

//Estruturas condicionais
var numero1 = 10;
var numero2 = 11;
var soma = numero1 + numero2;

if (soma % 2 === 0) {
  console.log("A Soma dos Numeros e ".concat(soma, " PAR"));
} else if (soma % 2 === 0 && soma >= 20) {
  console.log("A Soma e ".concat(soma, " PAR, maior igual a 20"));
} else {
  console.log("A Soma ".concat(soma, " e IMPAR"));
}