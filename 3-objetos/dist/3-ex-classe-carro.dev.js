"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Carro =
/*#__PURE__*/
function () {
  function Carro(marca, modelo, ano, cor, combustivel, qtd_litros_km, precoCombustivel, qtd_km) {
    _classCallCheck(this, Carro);

    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.cor = cor;
    this.combustivel = combustivel;
    this.qtd_litros_km = qtd_litros_km;
    this.precoCombustivel = precoCombustivel;
    this.qtd_km = qtd_km;
  }

  _createClass(Carro, [{
    key: "descrever",
    value: function descrever() {
      console.log("Seu carro \xE9 da marca ".concat(this.marca, ", modelo ").concat(this.modelo, "."));
      console.log("Do ano de ".concat(this.ano, " e cor ").concat(this.cor, "."));
      console.log("Ele utiliza ".concat(this.combustivel, " como combust\xEDvel."));
      var consumo = this.calcularConsumo();
      console.log("Ele gasta ".concat(consumo.toFixed(2), " litros por KM."));
    }
  }, {
    key: "calcularConsumo",
    value: function calcularConsumo() {
      return this.qtd_litros_km / this.qtd_km * 10;
    }
  }]);

  return Carro;
}();

var carro = new Carro('Fiat', 'Strada', 2023, 'Branco', 'Gasolina', 10, 4.56, 450);
carro.descrever();