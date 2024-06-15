"use strict";

// Abaixo de 17: Muito abaixo do peso
// Entre 17 e 18,49: Abaixo do peso
// Entre 18,5 e 24,99: Peso normal
// Entre 25 e 29,99: Acima do peso
// Entre 30 e 34,99: Obesidade I
// Entre 35 e 39,99: Obesidade II (severa)
// Acima de 40: Obesidade III (mórbida)
var altura = 1.67;
var peso = 85.500;
var imc = peso / (altura * altura);
console.log("Seu IMC e de ".concat(imc.toFixed(2))); //Condicional para o Programa

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