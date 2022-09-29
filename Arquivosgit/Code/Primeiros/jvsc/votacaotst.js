// const prompt = require('prompt-sync')();
// // console.clear();

// // function autoriza(idade) {
// //     if (idade >= 18) {
// //         return 'OBRIGATÓRIO';
// //     } else if (idade < 18 && idade >= 16) {
// //         return 'OPCIONAL';
// //     } else if (idade < 16) {
// //         return 'NEGADO';
// //     }
// // }

// // function votacao(autorizacao, voto) {
// //     if (autorizacao == 'OBRIGATÓRIO' || autorizacao == 'OPCIONAL') {
// //         if (voto == 1) {
// //             return 1;
// //         } else if (voto == 2) {
// //             return 2;
// //         } else if (voto == 3) {
// //             return 3;
// //         } else if (voto == 4) {
// //             return 4;
// //         } else if (voto == 5) {
// //             return 5;
// //         }
// //     } else {
// //         console.log('Você ainda não pode votar');
// //     }
// // }
// // function exibirResultado() {
// //     console.log(`
// //     O Candidato 1 recebeu ${lista1} votos.
// //     O Candidato 2 recebeu ${lista2} votos.
// //     O Candidato 3 recebeu ${lista3} votos.
// //     Votos Nulo: ${lista4}
// //     Votos em Branco: ${lista5}`);
// //     if (lista1 > lista2 && lista1 > lista3) {
// //         console.log(`O vencedor da eleição é o Carlos Silva`);
// //     } else if (lista2 > lista1 && lista2 > lista3) {
// //         console.log(`O vencedor da eleição é o João Santos`);
// //     } else if (lista3 > lista1 && lista3 > lista2) {
// //         console.log(`O vencedor da eleição é o Luis Mendes`);
// //     } else if (lista1 == lista2 && lista1 == lista3) {
// //         console.log(`Houve um empate entre os candidatos`);
// //     }
// // }

// // let lista1 = 0;
// // let lista2 = 0;
// // let lista3 = 0;
// // let lista4 = 0;
// // let lista5 = 0;

// // console.log('HOJE É DIA DE ELEIÇÃO!!');

// // console.log();

// // console.log(`
// // Suas opções são:
// // 1. Carlos Silva
// // 2. João Santos
// // 3. Luis Mendes
// // 4. Voto Nulo
// // 5. Voto em Branco`);

// // console.log();

// // console.log(`
// // Lembrando que eleitores acima de 18 anos possuem voto obrigatório,
// // Entre 16 e 18 possuem voto opcional
// // E abaixo de 16 não podem votar.`);

// // console.log();

// // let quant = +prompt('Qual a quantidade de eleitores: ');

// // for (let i = 0; i < quant; i++) {
// //     console.log();
// //     console.log(`Olá Eleitor(a) ${i + 1}, seja bem-vindo(a)!`);
// //     var ano = +prompt('Em que ano você nasceu? ');
// //     var voto = +prompt('Qual seu voto? ');
// //     let idade = 2022 - ano;
// //     let posicao = autoriza(idade);
// //     let re = votacao(posicao, voto);
// //     if (re == 1) {
// //         lista1++;
// //     } else if (re == 2) {
// //         lista2++;
// //     } else if (re == 3) {
// //         lista3++;
// //     } else if (re == 4) {
// //         lista4++;
// //     } else if (re == 5) {
// //         lista5++;
// //     }
// // }

// // exibirResultado();
// function autorizaVoto() {
//     let ano = +prompt('Digite seu ano de nascimento ');
//     let idade = (ano - 2022) * -1;
//     if (idade >= 18) {
//         return 'OBRIGATÓRIO';
//     } else if (idade < 18 && idade >= 16) {
//         return 'OPCIONAL';
//     } else if (idade < 15) return 'NEGADO';
// }

// function votacao() {
//     let autorizacao = autorizaVoto();
//     let voto = 1;
//     if (autorizacao == 'OBRIGATÓRIO' || autorizacao == 'OPCIONAL') {
//         if (voto == 1) return 1;
//         if (voto == 2) return 2;
//         if (voto == 3) return 3;
//         if (voto == 4) return 4;
//         if (voto == 5) return 5;
//     } else return 'Você ainda não pode votar';
// }

// console.log(votacao());

// function soma() {
//     return 'bia desgraçada';
// }
// console.log(soma());
const prompt = require('prompt-sync')();

// class candidato {
//     constructor(nome, numero) {
//         this.nome = nome;
//         this.number = numero;
//         this.numerosVotos = 0;
//     }
//     adicionarVoto() {
//         this.numerosVotos += 1;
//     }
// }

// const renata = new candidato('Renata Reto', 1);
// const bruno = new candidato('Bruno Cão', 2);
// const agenor = new candidato('Agenor', 3);
// const nulo = new candidato('Voto Nulo', 4);
// const branco = new candidato('Voto em Branco', 5);

const renata = {
    nome: 'renata',
    number: 1,
    numerosVotos: 0,
};
const bruno = {
    nome: 'bruno',
    number: 2,
    numerosVotos: 0,
};
const agenor = {
    nome: 'agenor',
    number: 3,
    numerosVotos: 0,
};
const nulo = {
    nome: 'nulo',
    number: 4,
    numerosVotos: 0,
};
const branco = {
    nome: 'branco',
    number: 5,
    numerosVotos: 0,
};

const arrCandidatos = [renata, bruno, agenor, nulo, branco];

// console.log(candidato1);
// console.log(candidato2);
// console.log(candidato3);
// console.log(candidato4);
// console.log(candidato5);

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
            'Digite o número de seu candidato ou 4 para nulo ou 5 para voto em branco.'
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
    if (cand1 > cand3 && cand1 > cand2) {
        return `${cand1} FOI O MAIS VOTADO!`;
    } else if (cand2 > cand3 && cand2 > cand1) {
        return `${cand2} FOI O MAIS VOTADO!`;
    } else if (
        (cand1 == cand2 && cand1 == cand3) ||
        (cand2 == cand1 && cand2 == cand3) ||
        (cand3 == cand2 && cand3 == cand1)
    ) {
        return 'Precisaremos de um segundo turno...';
    } else return `${cand3} FOI O MAIS VOTADO!`;
}

// do {
//     inicio();
//     console.log(votacao(autorizaVoto()));
// } while (continuacao());

renata.numerosVotos = 5;
bruno.numerosVotos = 7;
agenor.numerosVotos = 8;
nulo.numerosVotos = 2;
branco.numerosVotos = 3;

let teste = arrCandidatos.reduce((total, item) => {
    console.log(item);
    total;
    return item.numerosVotos;
}, 0);

console.log(teste);
