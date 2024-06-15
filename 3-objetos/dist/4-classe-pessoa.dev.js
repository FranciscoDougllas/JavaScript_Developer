"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Pessoa =
/*#__PURE__*/
function () {
  function Pessoa(nome, idade, peso, altura) {
    _classCallCheck(this, Pessoa);

    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
  }

  _createClass(Pessoa, [{
    key: "calcularImc",
    value: function calcularImc() {
      return this.peso / (this.altura * this.altura);
    }
  }, {
    key: "descrever",
    value: function descrever() {
      console.log("Seu nome \xE9 ".concat(this.nome, " e voc\xEA tem ").concat(this.idade, " anos."));
      console.log("Sua altura \xE9 de ".concat(this.altura, "m e seu peso \xE9 de ").concat(this.peso, "kg."));
      console.log("Seu IMC ser\xE1 de ".concat(this.calcularImc().toFixed(2), "."));
      this.classificaImc(); // Chamada para o método de classificação de IMC
    }
  }, {
    key: "classificaImc",
    value: function classificaImc() {
      var imc = this.calcularImc(); // Calcula o IMC da pessoa

      if (imc < 17) {
        console.log('Abaixo do Peso');
      } else if (imc >= 17 && imc < 25) {
        console.log('Peso normal');
      } else if (imc >= 25 && imc < 30) {
        console.log('Sobrepeso');
      } else if (imc >= 30 && imc < 40) {
        console.log('Obesidade I');
      } else {
        console.log('Obesidade II');
      }
    }
  }]);

  return Pessoa;
}();

var humano = new Pessoa('Francisco', 29, 86, 1.67);
var pessoa2 = new Pessoa('Laurice', 28, 67, 1.57);
humano.descrever();
pessoa2.descrever();