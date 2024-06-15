"use strict";

// Calcule o valor da viagem
// 1 - Preco do Etanol
// 2 - Preco da Gasolina
// 3 - Tipo de combustivel
// 4 - Gasto medio por km
// 5 - Distancia a percorrer
var preco_etanol = 3.67;
var preco_gasolina = 5.67;
var tipo_combustivel = "Gasolina";
var litros_gasto_km = 12;
var distancia = 280; //Total litros combustivel

var litros = distancia / litros_gasto_km; //Total custo da viagem

if (tipo_combustivel === "Gasolina") {
  var custo = litros * preco_gasolina;
  console.log("O Custo total sera de ".concat(custo.toFixed(2)));
} else if (tipo_combustivel === "Etanol") {
  var _custo = litros * preco_etanol;

  console.log("O Custo total sera de ".concat(_custo.toFixed(2)));
} else {
  console.log('Não foi possivel calcular erro!!!');
}