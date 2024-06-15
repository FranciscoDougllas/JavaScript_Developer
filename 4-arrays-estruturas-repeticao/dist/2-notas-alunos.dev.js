"use strict";

var notas = [];
notas.push(6);
notas.push(8);
notas.push(10);
notas.push(5);
notas.push(7);
console.log(notas.length); //Total de pontos

var total = 0;

for (var i = 0; i < notas.length; i++) {
  total += notas[i];
}

var media = total / notas.length;
console.log("A Media das Notas e ".concat(media));