//Operador Logico AND &&
const a1 = true  && true; // true && true retorna true
const a2 = true  && false; // true && false retorna false
const a3 = false && true; // false && true retorna false
const a4 = false && (3 === 4); // false && false retorna false
const a5 = "Cat" && "Dog"; // "Cat" && "Dog" retorna "Dog"
const a6 = false && "Cat"; // false && "Cat" retorna false

//Operador Logico OU ||
const o1 = true  || true; // true || true retorna true
const o2 = true  || false; // true || false retorna true
const o3 = false || true; // false || true retorna true
const o4 = false || (3 === 4); // false || false retorna false
const o5 = "Cat" || "Dog"; // "Cat" || "Dog" retorna "Cat"
const o6 = false || "Cat"; // false || "Cat" retorna "Cat"

//Operador Logico NOT !
const n1 = !true; // !true retorna false
const n2 = !false; // !false retorna true
const n3 = !("Cat" && "Dog"); // !("Cat" && "Dog") retorna true

//OBS: O JavaScript so possue esses 3 operadores Logicos
