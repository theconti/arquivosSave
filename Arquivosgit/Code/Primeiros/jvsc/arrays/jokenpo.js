var prompt = require("prompt-sync")();

const selections = ["pedra", "papel", "tesoura"];
const finalOptions = ["sim", "não", "no", "yes", "n", "y", "s", "nao"];
let myChoice;
let ai;
let repetir = true;
let wins = 0;
let losses = 0;
let resposta ;

console.log("Welcome to JOKENPO!!");
prompt("Press enter to start!");
console.log();

while (repetir == true) {
    let rodadas = +prompt("Quantas rodadas serão jogadas?!");
    wins = 0;
    losses = 0;
    for (let i = 0; i < rodadas; i++) {
        myChoice = prompt("Escolha: pedra, papel ou tesoura...");

        while (selections.indexOf(myChoice) == -1) {
            myChoice = prompt("Escolha: pedra, papel ou tesoura... ");
        }

        ai = selections[Math.floor(Math.random() * selections.length)];

        console.log("Humans choose " + myChoice + " AI chooses " + ai);

        if (myChoice == "pedra" && ai == "tesoura") {
            console.log("Humans win");
            wins++;
        } else if (myChoice == "pedra" && ai == "papel") {
            console.log("Humans lose");
            losses++;
        } else if (myChoice == "tesoura" && ai == "papel") {
            console.log("Humans win");
            wins++;
        } else if (myChoice == "tesoura" && ai == "pedra") {
            console.log("Humans lose");
            losses++;
        } else if (myChoice == "papel" && ai == "tesoura") {
            console.log("Humans lose");
            losses++;
        } else if (myChoice == "papel" && ai == "pedra") {
            console.log("Humans win");
            wins++;
        } else {
            console.log("We tie");
        }
    }
    if (wins > losses) {
        console.log("Humans win the match " + wins + "x" + losses);
    } else if (losses > wins) {
        console.log("AI wins the match " + losses + "x" + wins);
    } else {
        console.log("We tied the match");
    }

    resposta  = prompt("quer jogar de novo?!");

    while (finalOptions.indexOf(resposta ) == -1) {
        resposta  = prompt("quer jogar de novo?!");
    }
    if (
        resposta  == "no" ||
        resposta  == "nao" ||
        resposta  == "n" ||
        resposta  == "não"
    ) {
        repetir = false;
    }
}
