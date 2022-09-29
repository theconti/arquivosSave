const prompt = require('prompt-sync')();

class Candidato {
    constructor(nome, numero) {
        this.nome = nome;
        this.number = numero;
        this.numerosVotos = 0;
    }
    adicionarVoto() {
        this.numerosVotos += 1;
    }
}

const renata = new Candidato('Renata Reto', 1);
const bruno = new Candidato('Bruno Cão', 2);
const agenor = new Candidato('Agenor', 3);
const nulo = new Candidato('Voto Nulo', 4);
const branco = new Candidato('Voto em Branco', 5);

const arrCandidatos = [renata, bruno, agenor, nulo, branco];

function inicio() {
    console.log();
    console.log('HOJE É DIA DE ELEIÇÃO!');
    console.log(`
Suas opções são: 
1. Renata Reto
2. Bruno Cão
3. Agenor
4. Voto Nulo
5. Voto em Branco`);

    console.log(`
Lembrando que eleitores acima de 18 anos possuem voto obrigatório! Entre 16 e 17 anos podem optar por votar ou não.
menores de 16 não podem votar!`);

    console.log();
}

function autorizaVoto() {
    let ano = +prompt('Digite seu ano de nascimento ');
    console.log();
    let idade = (ano - 2022) * -1;
    if (idade >= 18) {
        return 'OBRIGATÓRIO';
    } else if (idade < 18 && idade >= 16) {
        return 'OPCIONAL';
    } else return 'NEGADO';
}

function votacao(autorizacao) {
    if (autorizacao == 'OBRIGATÓRIO' || autorizacao == 'OPCIONAL') {
        console.log(
            'Digite o número de seu Candidato ou 4 para nulo ou 5 para voto em branco.'
        );
        console.log();
        voto = +prompt('Vote: ');
        if (voto == renata.number) {
            renata.adicionarVoto();
        } else if (voto == agenor.number) {
            agenor.adicionarVoto();
        } else if (voto == bruno.number) {
            bruno.adicionarVoto();
        } else if (voto == nulo.number) {
            nulo.adicionarVoto();
        } else if (voto == branco.number) {
            branco.adicionarVoto();
        } else {
            console.log('essa opção não está em nossa lista de candidatos.');
        }
    } else {
        return 'Você ainda não pode votar';
    }
}

function continuacao() {
    resposta = prompt('Mais pessoas vão votar? ').toLowerCase();
    console.clear();

    while (
        resposta != 'não' &&
        resposta != 'n' &&
        resposta != 'nao' &&
        resposta != 'no' &&
        resposta != 's' &&
        resposta != 'sim' &&
        resposta != 'yes'
    ) {
        console.log('Resposta inválida');
        resposta = prompt('Mais pessoas vão votar? ').toLowerCase();
    }

    if (
        resposta == 'não' ||
        resposta == 'n' ||
        resposta == 'nao' ||
        resposta == 'no'
    ) {
        return false;
    } else return true;
}

function exibirResultado(cand1, cand2, cand3) {
    if (cand1.numerosVotos > cand3.numerosVotos && cand1.numerosVotos > cand2.numerosVotos) {
        return `${cand1.nome} FOI O MAIS VOTADO!`;
    } else if (cand2.numerosVotos > cand3.numerosVotos && cand2.numerosVotos > cand1.numerosVotos) {
        return `${cand2.nome} FOI O MAIS VOTADO!`;
    } else if (
        (cand1.numerosVotos == cand2.numerosVotos && cand1.numerosVotos == cand3.numerosVotos) ||
        (cand2.numerosVotos == cand1.numerosVotos && cand2.numerosVotos == cand3.numerosVotos) ||
        (cand3.numerosVotos == cand2.numerosVotos && cand3.numerosVotos == cand1.numerosVotos)
    ) {
        return 'Precisaremos de um segundo turno...';
    } else return `${cand3.nome} FOI O MAIS VOTADO!`;
}

do {
    inicio();
    console.log(votacao(autorizaVoto()));
    console.log()
} while (continuacao());

console.log(exibirResultado(renata, agenor, bruno))
prompt("aperte entender para ver todos os resultados")
    console.clear()
    console.log(arrCandidatos)
