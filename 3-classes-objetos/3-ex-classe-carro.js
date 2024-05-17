class Carro {
    constructor(marca, modelo, ano, cor, combustivel, qtd_litros_km, precoCombustivel, qtd_km) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.combustivel = combustivel;
        this.qtd_litros_km = qtd_litros_km;
        this.precoCombustivel = precoCombustivel;
        this.qtd_km = qtd_km;
    }

    descrever() {
        console.log(`Seu carro é da marca ${this.marca}, modelo ${this.modelo}.`);
        console.log(`Do ano de ${this.ano} e cor ${this.cor}.`);
        console.log(`Ele utiliza ${this.combustivel} como combustível.`);

        const consumo = this.calcularConsumo();
        console.log(`Ele gasta ${consumo.toFixed(2)} litros por KM.`);
    }

    calcularConsumo() {
        return (this.qtd_litros_km / this.qtd_km) * 10;
    }
}

const carro = new Carro('Fiat', 'Strada', 2023, 'Branco', 'Gasolina', 10, 4.56, 450);
carro.descrever();
