var prompt = require("prompt-sync")();

let numero = +prompt("Digite um número inteiro...");

const total = [];
const impar = [];
const par = [];
let x = 0;

for (var i = 1; i < numero; i++) {
    x++;
    total.push(x);
}

total.forEach((number) => {
    if (number % 2 == 0) {
        par.push(number);
    } else {
        impar.push(number);
    }
});

console.log(total);
console.log(par);
console.log(impar);
