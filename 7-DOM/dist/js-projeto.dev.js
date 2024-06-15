"use strict";

var animais = document.getElementById('animais');
var gridSection = document.getElementsByClassName('grid-section');
gridSection; //Seletor Geral Unico para o DOM querySelector

var primeiraLi = document.querySelector('li');
var liksInternos = document.querySelector('[href^="#"');
console.log(liksInternos.href); //Seletor queriSelectorAll

var animaisImg = document.querySelectorAll('#animais img');
var gridSectionHTML = document.getElementsByClassName('grid-section');
var gridSectionNode = document.querySelectorAll('.grid-section'); //Array Like

gridSectionNode.forEach(function (item, index) {
  console.log(index);
});