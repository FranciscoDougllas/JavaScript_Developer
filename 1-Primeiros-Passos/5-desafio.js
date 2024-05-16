// Calcule o valor da viagem

// 1 - Preco do Etanol
// 2 - Preco da Gasolina
// 3 - Tipo de combustivel
// 4 - Gasto medio por km
// 5 - Distancia a percorrer

const preco_etanol = 3.67;
const preco_gasolina = 5.67;
let tipo_combustivel = "Gasolina";
let litros_gasto_km = 12;
let distancia = 280;

//Total litros combustivel
let litros = distancia / litros_gasto_km;

//Total custo da viagem
if (tipo_combustivel === "Gasolina"){
    let custo = litros * preco_gasolina;
    console.log(`O Custo total sera de ${custo.toFixed(2)}`);
}else if(tipo_combustivel === "Etanol"){
    let custo = litros * preco_etanol;
    console.log(`O Custo total sera de ${custo.toFixed(2)}`);
}else{
    console.log('Não foi possivel calcular erro!!!')
}