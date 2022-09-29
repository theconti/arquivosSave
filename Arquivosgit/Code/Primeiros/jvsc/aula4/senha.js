var prompt = require("prompt-sync")();

let usuario = prompt("Insira o nome do usuário: ");
let senha = prompt("Insira sua senha: ");

while (usuario === senha) {
  console.log("Erro: usuário não pode ser igual a senha!");
  senha = prompt("Insira sua senha: ");
}

console.log("login efetuado!");

let nome = prompt("Qual o seu nome: ");

while (nome.length < 4) {
  console.log("número mínimo de caracteres não atingido, tente de novo: ");
  nome = prompt("Qual o seu nome: ");
}
console.log("Nome validado com sucesso!");

let idade = +prompt("Qual a sua idade: ");

while (idade < 0 || idade > 150 || isNaN(idade) == true) {
  console.log("Idade inválida.");
  idade = +prompt("Qual a sua idade: ");
}
console.log("Idade validada com sucesso!");

let salario = +prompt("Qual seu salário: ");

while (salario < 0 || isNaN(idade) == true) {
  console.log("Valor inválido.");
  salario = +prompt("Qual é seu salário: ");
}
console.log("Salário validado com sucesso!");

let estadoCivil = prompt("Qual o seu estado civil: ");

while (
  estadoCivil !== "s" &&
  estadoCivil !== "c" &&
  estadoCivil !== "v" &&
  estadoCivil !== "d"
) {
  console.log("Estado civil inválido.");
  estadoCivil = prompt("Qual o seu estado civil: ");
}
console.log("Estado civil validado com sucesso!");
