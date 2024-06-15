"use strict";

var pares = [];
var impares = [];

for (var i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    pares.push(i);
  } else {
    impares.push(i);
  }
}

console.log("Os Numeros pares s\xE3o ".concat(pares));
console.log("Os Numeros Impares s\xE3o ".concat(impares));