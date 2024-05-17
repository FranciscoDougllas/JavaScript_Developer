//Classe e a definição 
class Pessoa{
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2024 - idade;
    }
    descrever(){
        console.log(`Meu nome e ${this.nome} minha idade e ${this.idade}`);
    }
}

//Instancia e a ocorrencia
const douglas = new Pessoa('Francisco Douglas', 29);
const laurice = new Pessoa('Laurice Mota', 27);

laurice.descrever();
douglas.descrever();

console.log(douglas);

//Funcao
function compararPessoas(p1, p2){
    if (p1.idade > p2.idade){
        console.log(`${p1.nome} e Mais velho que ${p2.nome}`);
    }else if(p2.idade > p1.idade){
        console.log(`${p2.nome} e Mais velho que ${p1.nome}`)
    }else{
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

const jk = new Pessoa('JK', 25);
const abc = new Pessoa('Abc', 42);
compararPessoas(jk, abc);