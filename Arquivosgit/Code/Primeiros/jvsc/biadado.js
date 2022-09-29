var prompt = require('prompt-sync')();

class Player {
    constructor() {
        this.name;
        this.dadoAtual;
        this.wins = 0;
    }
    dado() {
        this.dadoAtual = Math.ceil(Math.random() * 6);
        return `${this.name} jogou o dado e tirou ${this.dadoAtual}`;
    }
    giveName() {
        this.name = prompt('Qual o seu nome?! ');
    }
}

function getPlayerNumber() {
    let numberOfPlayers = +prompt('Quantos players vão jogar?!');
    let arrayOfPlayers = [];
    for (let i = 0; i < numberOfPlayers; i++) {
        arrayOfPlayers.push(new Player());
    }
    return arrayOfPlayers;
}

function getPlayerName(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`Player ${[i + 1]}:`);
        array[i].giveName();
    }
}

function jogarDados(array) {
    for (let i = 0; i < array.length; i++) {
        array[i].dado();
        console.log(`${array[i].name} tirou ${array[i].dadoAtual} no seu dado`);
    }
}

function vencedorRodada(array) {
    let answer = array[0].dadoAtual;
    for (let i = 0; i < array.length; i++) {
        if (array[i].dadoAtual > answer) answer = array[i].dadoAtual;
    }
    for (let j = 0; j < array.length; j++) {
        if (array[j].dadoAtual === answer) {
            array[j].wins += 1;
            console.log(`${array[j].name} fez um ponto na rodada! 
            Seu total agora é de ${array[j].wins}`);
            console.log();
        }
    }
}

function vencedorGeral(array) {
    let answer = array[0].wins;
    for (let i = 0; i < array.length; i++) {
        if (array[i].wins > answer) answer = array[i].wins;
    }
    for (let j = 0; j < array.length; j++) {
        if (array[j].wins === answer) {
            console.clear();
            console.log(
                `${array[j].name} vence o jogo com ${array[j].wins} pontos!`
            );
            console.log();
        }
    }
}

function numberofRounds() {
    let rounds = +prompt('Quantas rodadas vocês querem jogar?!');
    for (let i = 1; i <= rounds; i++) {
        prompt(`aperter "enter" para começar a rodada ${i}`);
        console.clear();
        console.log(`Rodada ${[i]}:`);
        console.log();
        jogarDados(playersObject);
        console.log();
        vencedorRodada(playersObject);
    }
    vencedorGeral(playersObject);
}

const playersObject = getPlayerNumber();
getPlayerName(playersObject);
numberofRounds();
