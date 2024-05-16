// Media de Notas
// Calcule a media e verifique se o aluno esta ou nao aprovado

const nota1 = 6.5;
const nota2 = 8.5;

let media = (nota1 + nota2) / 2;

if (media < 5){
    console.log(`A Media foi de ${media}: Esta Reprovado`);
}else if(media > 5 && media < 6.9){
    console.log(`A Media foi de ${media}: Recuperação`);
}else if(media >= 7){
    console.log(`A Media foi de ${media} Esta Aprovado`);
}else{
    console.log('Não foi possivel calcula a media')
}