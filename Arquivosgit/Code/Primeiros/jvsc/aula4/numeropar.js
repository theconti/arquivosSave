var prompt = require("prompt-sync")();

let guess = +prompt ('Digite um número par: ');

while (guess % 2 == 1) {
    console.log('Você não digitou um número par!')
    guess = +prompt ('Tente digitar um número par dessa vez: ');
}

console.log('Parabéns, você digitou um número par!');