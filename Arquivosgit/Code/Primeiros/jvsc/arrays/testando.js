var prompt = require("prompt-sync")();

let linhas = +prompt("Dê um número de linhas: ");
let colunas = +prompt("Dê um número de colunas: ");
let matrix = [];
const x = [];
let y = -1;
let a = 0;

let i = 0;
for (i = 0; i < linhas; i++) {
    for (i = a; i < colunas + a; i++) {
        matrix.push(i);
    }
    matrix = [];
    a++;
}

console.log(matrix);
