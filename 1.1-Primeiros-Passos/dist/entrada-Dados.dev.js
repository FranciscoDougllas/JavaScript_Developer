"use strict";

var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('Qual é o seu nome? ', function (resposta) {
  console.log("Ol\xE1 ".concat(resposta));
  rl.close();
});