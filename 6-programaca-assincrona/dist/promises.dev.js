"use strict";

var promessa = Promise.resolve(6 + 4);
promessa.then(function (value) {
  console.log("A soma e ".concat(value));
  return value;
});
console.log('Algum codigo');
console.log('Outro codigo');