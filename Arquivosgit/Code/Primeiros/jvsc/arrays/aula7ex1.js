var prompt = require("prompt-sync")();

let num = +prompt("Insira um número: ");

const impares = [];
const pares = [];

for (let i = 0; i <= num; i++) {
    if (i % 2 == 0) {
        pares.push(i);
    } else if (i % 2 == 1) {
        impares.push(i);
    }
}

console.log("numeros ímpares: " + impares);
console.log("numeros ímpares: " + pares);
