"use strict";

var tempo1 = 10;
var tempo2 = 11;
var tempo3 = 13;

if (tempo1 < tempo2 && tempo1 < tempo3) {
  console.log("O Corredor 01 Ganhou a corrida com ".concat(tempo1, " Segundos"));
} else if (tempo2 < tempo1 && tempo2 < tempo3) {
  console.log("O Corredor 02 Ganhou a corrida com ".concat(tempo2, " Segundos"));
} else {
  console.log("O Corredor 03 Ganhou a corrida com ".concat(tempo3, " Segundos"));
} //Switch case


switch (tempo1, tempo2, tempo3) {
  case "".concat(tempo1 < tempo2 && tempo1 < tempo3):
    console.log("Corredor 01 ganhou com ".concat(tempo1));
    break;
}