"use strict";

var _require = require('./funcao-auxiliar'),
    parImpar = _require.parImpar,
    print = _require.print;

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var result = parImpar(numeros);
console.log("O Maior numero Par e ".concat(result.maiorPar));
console.log("O Menor numero Impar e ".concat(result.menorImpar));