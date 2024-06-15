"use strict";

//Utilizando ForEach
var img = document.querySelectorAll('img');
img.forEach(function (item) {
  item.style.backgroundColor = 'red';
  item.width = '200';
});