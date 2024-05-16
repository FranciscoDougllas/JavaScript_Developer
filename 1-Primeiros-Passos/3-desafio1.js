/*Faça um programa para calcular o valor de uma viagem

1 - Preco do combustivel
2 - Gasto media de Combustivel por km
3 - Distancia em km
*/
const preco_combustivel = 4.56;
const gas_medio_km      = 12;
const distancia = 220;

let valor_total = (distancia / gas_medio_km) * preco_combustivel;
console.log(`O Custo total da viagem sera de ${valor_total} R$`)