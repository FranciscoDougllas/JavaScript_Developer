const {parImpar, print} = require('./funcao-auxiliar');

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const result = parImpar(numeros);

console.log(`O Maior numero Par e ${result.maiorPar}`);
console.log(`O Menor numero Impar e ${result.menorImpar}`);