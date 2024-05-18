const notas = [];

notas.push(6);
notas.push(8);
notas.push(10);
notas.push(5);
notas.push(7);

console.log(notas.length);

//Total de pontos
let total = 0;

for (let i = 0; i < notas.length; i++){
    total += notas[i];
}
let media = total / notas.length;
console.log(`A Media das Notas e ${media}`)