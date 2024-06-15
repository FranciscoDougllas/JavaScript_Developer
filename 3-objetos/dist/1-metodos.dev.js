"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Metodos
var animal = {
  nome: 'Bob',
  latir: function latir() {
    console.log('Au au au');
  }
};
console.log(animal.nome);
animal.latir(); // Outro exemplo

var pessoa = {
  nome: 'GTA',
  getNome: function getNome() {
    return this.nome;
  },
  setNome: function setNome(novoNome) {
    // Adicionado parâmetro novoNome
    this.nome = novoNome;
  }
};
console.log(pessoa.getNome());
pessoa.setNome('Hoa');
console.log(pessoa.getNome()); //Prototypes

var text = 'asd';
console.log(Object.getPrototypeOf(text));
var bool = true;
console.log(Object.getPrototypeOf(bool));
var arr = [];
console.log(Object.getPrototypeOf(arr)); //Funcao virando classes

function criaCachorro(nome, raca) {
  var cachorro = Object.create({});
  cachorro.nome = nome;
  cachorro.raca = raca;
  return cachorro;
}

var bob = criaCachorro('Bob', 'Alemao');
console.log(bob); //Funcoes construtoras

function Cachorro(nome, raca) {
  this.nome = nome;
  this.raca = raca;
}

var dog = new Cachorro('BOBW', 'Shishue');
console.log(dog); //Classes ES6

var dogClasse = function dogClasse(nome, raca) {
  _classCallCheck(this, dogClasse);

  this.nome = nome;
  this.raca = raca;
};

var keff = new dogClasse('MM', 'Lrb');
console.log(keff); //Mais sobre classes

var Caminhao =
/*#__PURE__*/
function () {
  function Caminhao(eixos, cor) {
    _classCallCheck(this, Caminhao);

    this.eixos = eixos;
    this.cor = cor;
  }

  _createClass(Caminhao, [{
    key: "descreverCaminhao",
    value: function descreverCaminhao() {
      console.log("Esta caminha tem ".concat(this.eixos, " eixos da cor ").concat(this.cor));
    }
  }]);

  return Caminhao;
}();

var scania = new Caminhao(6, 'Preto');
console.log(scania);