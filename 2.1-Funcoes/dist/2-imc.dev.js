"use strict";

//Funcao calcula imc
function calculaImc(peso, altura) {
  return peso / (altura * altura);
}

var peso = 85;
var altura = 1.67;
var imc = calculaImc(peso, altura);
console.log("Seu IMC e de ".concat(imc.toFixed(2))); //Condicional para o Programa

function classifica_imc(imc) {}

if (imc < 17) {
  console.log('Abaixo do Peso');
} else if (imc > 17 && imc < 18.49) {
  console.log('Peso Normal');
} else if (imc > 18.5 && imc < 24.99) {
  console.log('Acima do Peso');
} else if (imc > 25 && imc < 34.99) {
  console.log('SObrePeso I');
} else if (imc > 35 && imc < 39.99) {
  console.log('SObrepeso II');
} else {
  console.log('Obesidade Morbida');
}

classifica_imc(imc);