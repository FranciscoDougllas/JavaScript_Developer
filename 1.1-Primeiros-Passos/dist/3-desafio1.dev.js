"use strict";

/*Faça um programa para calcular o valor de uma viagem

1 - Preco do combustivel
2 - Gasto media de Combustivel por km
3 - Distancia em km
*/
var preco_combustivel = 4.56;
var gas_medio_km = 12;
var distancia = 220;
var valor_total = distancia / gas_medio_km * preco_combustivel;
console.log("O Custo total da viagem sera de ".concat(valor_total, " R$"));