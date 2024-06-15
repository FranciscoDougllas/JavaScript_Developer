"use strict";

//Criando funcoes
function minhafuncao(nome) {
  return 'Meu nome e Francisco';
}

console.log(minhafuncao('DD')); //Declarando dentro de uma variavel

var funcaoVar = function funcaoVar() {
  return 'Minha funcao';
};

console.log(funcaoVar('A')); //Outra forma arrow function

var testeArrow = function testeArrow() {
  console.log('Esta e uma arrow function');
};

testeArrow();

var parOuImpar = function parOuImpar(n) {
  if (n % 2 === 0) {
    console.log('Par');
  } else {
    console.log('Impar');
  }
};

parOuImpar(3); //Mais sobre arrow function

var Quadrado = function Quadrado(x) {
  return x * x;
};

console.log(Quadrado(3)); //FUncoes undefined

var multip = function multip(m, n) {
  if (n === undefined) {
    return m * 2;
  } else {
    return m * n;
  }
};

console.log(multip(5));
console.log(multip(2, 3));