var prompt = require("prompt-sync")();

let numeros = [];

for (let i = 0; i <= 20; i++) {
    let dado = Math.floor(Math.random() * 101);
    numeros.push(dado);
}

numeros.sort((a, b) => a - b);

console.log(numeros);
