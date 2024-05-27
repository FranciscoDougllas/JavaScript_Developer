//Criando funcoes
function minhafuncao(nome){
    return 'Meu nome e Francisco';
}
console.log(minhafuncao('DD'));

//Declarando dentro de uma variavel
const funcaoVar = function(){
    return 'Minha funcao';
}
console.log(funcaoVar('A'));


//Outra forma arrow function
const testeArrow = () =>{
    console.log('Esta e uma arrow function')
}
testeArrow();

const parOuImpar = (n) =>{
    if(n % 2 === 0){
        console.log('Par');
    }else{
        console.log('Impar');
    }
}
parOuImpar(3);

//Mais sobre arrow function
const Quadrado = (x) => {
    return x * x;
}
console.log(Quadrado(3));


//FUncoes undefined
const multip = function(m, n){
    if(n === undefined){
        return m * 2;
    }else {
        return m *n;
    }
}
console.log(multip(5));
console.log(multip(2, 3))