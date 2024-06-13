const animais = document.getElementById('animais');

const gridSection = document.getElementsByClassName('grid-section');
gridSection


//Seletor Geral Unico para o DOM querySelector
const primeiraLi = document.querySelector('li');

const liksInternos = document.querySelector('[href^="#"');
console.log(liksInternos.href)

//Seletor queriSelectorAll
const animaisImg = document.querySelectorAll('#animais img');

const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section')

//Array Like
gridSectionNode.forEach(function(item, index){
    console.log(index);
})