hpBoss = +prompt('Qual o HP do Boss? (entre 10 e 50)')
while (hpBoss > 50 || 10) {
    console.log('valor inválido')
    let hpBoss = +prompt('Qual o HP do Boss? (entre 10 e 50)')
    if (hpBoss >= 10 && hpBoss <= 50) {
        return console.log ('O hp do boss é ' + hpBoss);
    }
}