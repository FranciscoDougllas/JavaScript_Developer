//1 Forma de criar objetos
const carro1 = {
    nome:'Fiesta',
    marca:'Ford',
    cor:'Preta',
    ano:2015,
    consumo: 11,
    capacidadeTanque: 45,
}

for(const[chave, valor] of Object.entries(carro1)){
    console.log(`${chave} ${valor}`)
}

//

function falaCebolinha(frase){
    let fraseCebolinha = '';

    for(let letra of frase){
        if(letra == "r"{
            frasse ++
        })
    }
}