let pares = [];
let impares = [];

for (let i = 0; i<=20; i++){
    if(i % 2===0){
        pares.push(i);
    }else{
        impares.push(i);
    }
}
console.log(`Os Numeros pares são ${pares}`);
console.log(`Os Numeros Impares são ${impares}`);