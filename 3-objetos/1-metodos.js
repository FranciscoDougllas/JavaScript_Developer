// Metodos
const animal = {
    nome: 'Bob',
    latir: function() {
        console.log('Au au au');
    },
};

console.log(animal.nome);
animal.latir();

// Outro exemplo
const pessoa = {
    nome: 'GTA',
    getNome: function() {
        return this.nome;
    },
    setNome: function(novoNome) { // Adicionado parâmetro novoNome
        this.nome = novoNome;
    }
}
console.log(pessoa.getNome());

pessoa.setNome('Hoa');
console.log(pessoa.getNome());


//Prototypes
const text = 'asd';
console.log(Object.getPrototypeOf(text));

const bool = true;
console.log(Object.getPrototypeOf(bool));

const arr = [];
console.log(Object.getPrototypeOf(arr));


//Funcao virando classes
function criaCachorro(nome, raca){
    const cachorro = Object.create({})

    cachorro.nome = nome
    cachorro.raca = raca

    return cachorro;
}
const bob = criaCachorro('Bob', 'Alemao')
console.log(bob);


//Funcoes construtoras
function Cachorro(nome, raca){
    this.nome = nome
    this.raca = raca
}

const dog = new Cachorro('BOBW', 'Shishue');
console.log(dog)

//Classes ES6
class dogClasse {
    constructor(nome, raca){
        this.nome = nome
        this.raca = raca
    }
}
const keff = new dogClasse('MM', 'Lrb');
console.log(keff);


//Mais sobre classes
class Caminhao{
    constructor(eixos, cor){
        this.eixos = eixos;
        this.cor = cor;
    }
    descreverCaminhao(){
        console.log(`Esta caminha tem ${this.eixos} eixos da cor ${this.cor}`);
    }
}

const scania = new Caminhao(6, 'Preto');
console.log(scania);