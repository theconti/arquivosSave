var prompt = require("prompt-sync")();

let totalDays = +prompt('Quantos dias você tem?!');
let daysBeforeMonths = (totalDays % 365)
let days = daysBeforeMonths % 30
let months = Math.floor(daysBeforeMonths/30)
totalDays = Math.floor(totalDays/365)


console.log('Você tem ' + totalDays + ' anos ' + months + ' meses e ' + days + ' dias')


/*let idadeEmDias = +prompt("Digite sua idade em dias: ");

console.log(idadeEmDias);

let diasEmAnos = Math.trunc(idadeEmDias / 365);
console.log("Idade em anos: " + diasEmAnos);

let restoDias1 = idadeEmDias % 365;

let diasEmMeses = Math.trunc(restoDias1 / 30);
console.log("Idade em meses: " + diasEmMeses);

let restoDias2 = restoDias1 % 30;
console.log('Idade Em Dias: ${restoDias2}');*/