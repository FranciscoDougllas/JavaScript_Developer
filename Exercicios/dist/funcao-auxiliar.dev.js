"use strict";

//Funcao de print
function print(texto) {
  console.log(texto);
} //Function calcula media


function calculaMedia(notas) {
  if (notas.length === 0) {
    return "Nenhuma nota foi fornecida. Impossivel calcula a media";
  }

  var somaNotas = notas.reduce(function (acc, nota) {
    return acc + nota;
  }, 0);
  var media = somaNotas / notas.length;
  return "A Media das Notas e; ".concat(media.toFixed(2));
} //Maior par e Menor Impar


function parImpar(numeros) {
  var maiorPar = Infinity;
  var menorImpar = Infinity;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = numeros[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var numero = _step.value;

      if (numero % 2 === 0) {
        maiorPar = Math.max(maiorPar, numero);
      } else {
        menorImpar = Math.min(menorImpar, numero);
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return {
    maiorPar: maiorPar,
    menorImpar: menorImpar
  };
}

module.exports = {
  calculaMedia: calculaMedia,
  print: print,
  parImpar: parImpar
};