"use strict";

//Operador Logico AND &&
var a1 = true && true; // true && true retorna true

var a2 = true && false; // true && false retorna false

var a3 = false && true; // false && true retorna false

var a4 = false && 3 === 4; // false && false retorna false

var a5 = "Cat" && "Dog"; // "Cat" && "Dog" retorna "Dog"

var a6 = false && "Cat"; // false && "Cat" retorna false
//Operador Logico OU ||

var o1 = true || true; // true || true retorna true

var o2 = true || false; // true || false retorna true

var o3 = false || true; // false || true retorna true

var o4 = false || 3 === 4; // false || false retorna false

var o5 = "Cat" || "Dog"; // "Cat" || "Dog" retorna "Cat"

var o6 = false || "Cat"; // false || "Cat" retorna "Cat"
//Operador Logico NOT !

var n1 = !true; // !true retorna false

var n2 = !false; // !false retorna true

var n3 = !("Cat" && "Dog"); // !("Cat" && "Dog") retorna true
//OBS: O JavaScript so possue esses 3 operadores Logicos