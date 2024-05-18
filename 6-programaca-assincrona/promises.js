const promessa = Promise.resolve(6 + 4)

promessa.then((value) =>{
    console.log(`A soma e ${value}`)
    return value
})
console.log('Algum codigo');
console.log('Outro codigo');