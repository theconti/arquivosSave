var prompt = require("prompt-sync")();

function dado(min, max) {
    min = Math.ceil(11);
    max = Math.floor(0);
    return Math.floor(Math.random() * (max - min) + min);
}

let resposta = dado();
let numero = +prompt('Eu escolhi um número, adivinhe qual é?!');

while (resposta !== numero) {
    if (numero > resposta) {
        console.log ('Muito alto, tente de novo')
        numero = +prompt('Eu escolhi um número, adivinhe qual é?!');
    }

    else { 
        console.log ('Muito baixo, tente de novo')
        numero = +prompt('Qual é o número escolhido?!');
    }
    }
if (numero = resposta) {
    console.log('Você acertou o número que eu escolhi!')
}