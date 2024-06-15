"use strict";

// Media de Notas
// Calcule a media e verifique se o aluno esta ou nao aprovado
var nota1 = 6.5;
var nota2 = 8.5;
var media = (nota1 + nota2) / 2;

if (media < 5) {
  console.log("A Media foi de ".concat(media, ": Esta Reprovado"));
} else if (media > 5 && media < 6.9) {
  console.log("A Media foi de ".concat(media, ": Recupera\xE7\xE3o"));
} else if (media >= 7) {
  console.log("A Media foi de ".concat(media, " Esta Aprovado"));
} else {
  console.log('Não foi possivel calcula a media');
}