var prompt = require("prompt-sync")();
/*
let num1;
let num2;
const arr = [];

do {
    num1 = +prompt("Insira um número ");
    num2 = +prompt("insira outro número ");
} while (num1 == num2);

if (num1 > num2) {
    for (let i = num2; i >= num1; i--) {
        arr.push(i);
    }
} else if (num1 < num2) {
    for (let i = num2; i <= num1; i++) {
        arr.push(i);
    }
}

console.log(arr); */
let num = +prompt("Digite um número: ");

console.log(num);
for (i = 0; i <= num; i--) {
    if (num % 2 == 1) {
        console.log(num);
    }
    num--;
}
