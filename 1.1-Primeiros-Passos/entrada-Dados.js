const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Qual é o seu nome? ', (resposta) => {
    console.log(`Olá ${resposta}`);
    rl.close();
});