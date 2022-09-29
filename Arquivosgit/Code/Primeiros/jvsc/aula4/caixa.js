var prompt = require("prompt-sync")();

let saque = +prompt('Qual o valor do saque?!')
let notas100 = Math.floor(saque/100);
let valorAntes50 = saque - (notas100 * 100); 
let notas50 = Math.floor(valorAntes50/50);
let valorAntes10 = valorAntes50 - (notas50 * 50);
let notas10 = Math.floor(valorAntes10/10);
let valorAntes5 = valorAntes10 - (notas10 * 10);
let notas5 = Math.floor (valorAntes5/5);
let valorAntes1 = valorAntes5 - (notas5 * 5);
let notas1 = (valorAntes1/1);

console.log('Voce receberá: ')

if (notas100 !== 0) {
    console.log(notas100 + ' nota(s) de 100')}

if (notas50 !== 0) {
    console.log(notas50 + ' nota(s) de 50')}

if (notas10 !== 0) {
    console.log(notas10 + ' nota(s) de 10')}

if (notas5 !== 0) {
    console.log(notas5 + ' nota(s) de 5')}

if (notas1 !== 0) {
    console.log(notas1 + ' nota(s) de 1')}