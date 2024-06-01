const douglas = {
    nome: 'Francisco Douglas',
    idade: 29,
    descrever: function(){
        console.log(`Meu nome e ${this.nome} e minha idade e ${this.idade}`);
    }
};

console.log(douglas.nome);
console.log(douglas.idade);
console.log(douglas);

douglas.altura = 1.67;
douglas.peso = 85;

console.log(douglas.peso);
console.log(douglas.altura);
console.log(douglas);

delete douglas.peso;
console.log(douglas);

//Criando metodos para o Objeto metodos
const pessoa = {
    nome: 'Francisco Douglas',
    idade: 29,
    descrever: function(){
        console.log(`Meu nome e ${this.nome} e minha idade e ${this.idade}`);
    }
};

pessoa.descrever();

pessoa.nome = 'Laurice';
pessoa.idade = 27;
pessoa.descrever();

//Funcao para objetos
pessoa.descrever = function(){
    console.log(`Meu nome e ${this.nome}`)
}
pessoa.descrever();

//Outro exemplo
const atributo = "idade";
console.log(pessoa[atributo]);