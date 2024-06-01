class Pessoa {
    constructor(nome, idade, peso, altura) {
       this.nome = nome;
       this.idade = idade;
       this.peso = peso;
       this.altura = altura;
    }
 
    calcularImc() {
       return this.peso / (this.altura * this.altura);
    }
 
    descrever() {
       console.log(`Seu nome é ${this.nome} e você tem ${this.idade} anos.`);
       console.log(`Sua altura é de ${this.altura}m e seu peso é de ${this.peso}kg.`);
       console.log(`Seu IMC será de ${this.calcularImc().toFixed(2)}.`);
       this.classificaImc(); // Chamada para o método de classificação de IMC
    }

    classificaImc() {
        const imc = this.calcularImc(); // Calcula o IMC da pessoa
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
}
 
const humano = new Pessoa('Francisco', 29, 86, 1.67);
const pessoa2 = new Pessoa('Laurice', 28, 67, 1.57);
humano.descrever();
pessoa2.descrever();