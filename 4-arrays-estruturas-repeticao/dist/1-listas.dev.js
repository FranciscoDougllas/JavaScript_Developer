"use strict";

var alunos = ['Joao', 'Vitor', 'Marina'];
console.log(alunos);
console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos[2]); //ADICIONANDO ITEMS

alunos.push('Marta', 'Luzia');
console.log(alunos);
alunos[3] = '000';
console.log(alunos);
alunos.push(10, 20);
console.log(alunos);
console.log(alunos.pop());
console.log(alunos.shift());