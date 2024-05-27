const nome = 'Francisco';
let pagador = true;
let dinheiro = false;
let disciplina = true;

console.log(`O Cliente ${nome} ${pagador ? "E bom pagador." : "Não e bom pagador"}`)
console.log(`O ${nome} ${dinheiro ? 'Tem dinheiro na conta' : 'Não tem Dinheiro na conta'}`)
console.log(`O ${nome} e ${disciplina ? 'Disciplinado' : 'Não tem disciplina'}`);


//Maior de idade
const idade = 16;
const sexo  = 'F'
console.log(`${idade >= 18 && sexo === 'M' ? 'Maior de Idade' : 'Menor de Idade'}`)