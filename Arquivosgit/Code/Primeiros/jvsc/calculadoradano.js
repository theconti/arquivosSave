var prompt = require("prompt-sync")();

let hpBoss = +prompt("Qual o HP do Boss? (entre 10 e 50)");

while (hpBoss > 50 || hpBoss < 10) {
  console.log("valor inválido");
  hpBoss = +prompt("Qual o HP do Boss? (entre 10 e 50)");

  if (hpBoss >= 10 && hpBoss <= 50) {
   return console.log("O hp do boss é " + hpBoss);
  }
}
console.log("O hp do chefe é " + hpBoss);

let danoBoneco = +prompt("Qual o dano do ataque do boneco? (entre 10 e 50)");
let numeroDeTurnos = Math.ceil(hpBoss / danoBoneco);
console.log("O Boss morrerá em " + numeroDeTurnos + " turnos");
