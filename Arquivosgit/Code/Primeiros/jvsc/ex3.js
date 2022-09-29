var prompt = require("prompt-sync")();

let years = +prompt("Quantos anos você tem?");
let months = +prompt ('Quantos meses?');
let days = +prompt ('Quantos dias?!');

let totalDays = (years * 365) + (months * 30) + days;
console.log('Você viveu: ' + totalDays + " dias")