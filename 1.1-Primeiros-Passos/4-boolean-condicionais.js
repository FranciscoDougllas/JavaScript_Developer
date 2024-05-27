//Estruturas condicionais
const numero1 = 10;
const numero2 = 11;

let soma = numero1 + numero2;

if (soma % 2 === 0){
    console.log(`A Soma dos Numeros e ${soma} PAR`);
}else if(soma % 2 === 0 && soma >= 20){
    console.log(`A Soma e ${soma} PAR, maior igual a 20`);
} else{
    console.log(`A Soma ${soma} e IMPAR`)
}