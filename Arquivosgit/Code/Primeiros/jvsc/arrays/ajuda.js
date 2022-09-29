console.clear();
var pc = require("prompt-sync")();
//Pedra ganha da tesoura, mas perde para o papel;
//Tesoura ganha do papel, mas perde para a pedra;
//Papel ganha da pedra, mas perde para a tesoura.

let rodadas = +pc("Quantas rodadas deseja jogar? ");
cont = 0;
var maquina = ["pedra", "papel", "tesoura"];
var vit = 0;
var der = 0;

while (cont < rodadas) {
    cont++;
    var sua_escolha = pc("Qual deseja jogar? ");
    var escolha_maquina = Math.floor(Math.random() * maquina.length);
    console.log("a máquina escolheu " + maquina[escolha_maquina]);
    if (sua_escolha == "pedra" && escolha_maquina == maquina[2]) {
        // sua_escolha == 'tesoura' && escolha_maquina == 'papel'  sua_escolha == 'papel' && escolha_maquina == 'pedra')
        vit++;
        console.log("Você ganhou!");
    } else if (
        (escolha_maquina == "pedra" && sua_escolha == "tesoura") ||
        (escolha_maquina == "tesoura" && sua_escolha == "papel") ||
        (escolha_maquina == "papel" && sua_escolha == "pedra")
    ) {
        der++;
        console.log("Você perdeu!");
    }
}
console.log(vit);
