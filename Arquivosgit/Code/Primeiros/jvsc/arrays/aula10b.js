var prompt = require("prompt-sync")();

let nomes = [];
let limite = +prompt("Quantos nomes você quer cadastrar: ");

for (let i = 0; i <= limite; i++) {
    let nome = prompt("Digite os nomes: ");
    nomes.push(nome);
}

console.log("a sua lista invertida é: " + nomes.reverse());
let longest = nomes.sort(function (a, b) {
    return b.length - a.length;
})[0];

if (nomes[0].length == nomes[1].length) {
    const maiores = [];
    for (let i in nomes) {
        if (nomes[0].length == nomes[i].length) {
            maiores.push(nomes[i]);
        }
    }
    console.log("Os maiores nomes são: " + maiores);
} else {
    console.log("O maior nome é " + nomes[0]);
}

if (nomes[nomes.length - 1].length == nomes[nomes.length - 2].length) {
    const menores = [];
    for (let i in nomes) {
        if (nomes[nomes.length - 1].length == nomes[i].length) {
            menores.push(nomes[i]);
        }
    }
    console.log("Os menores nomes são: " + menores);
} else {
    console.log("O menor nome é: " + nomes[nomes.length - 1]);
}

/*
nomes.reverse();
console.log(nomes.length);
nomes.sort((a, b) => a - b);
console.log(nomes);*/
