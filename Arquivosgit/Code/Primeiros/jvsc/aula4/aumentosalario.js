var prompt = require("prompt-sync")();

let salario = +prompt('Insira o valor do salário do funcionário: ');

if (salario <= 280) {
    let salarioDepois = salario * 1.2;
    console.log('O salario era de ' + salario)
    console.log('O aumento percentual foi de 20%');
    console.log('O aumento foi de ' + (salarioDepois - salario));
    console.log('O salario reajustado é de ' + salarioDepois);
}
else if (salario > 280 && salario < 700) {
    let salarioDepois = salario * 1.15;
    console.log('O salario era de ' + salario)
    console.log('O aumento percentual foi de 15%');
    console.log('O aumento foi de ' + (salarioDepois - salario));
    console.log('O salario reajustado é de ' + salarioDepois);
}
else if (salario => 700 && salario < 1500) {
    let salarioDepois = salario * 1.1;
    console.log('O salario era de ' + salario)
    console.log('O aumento percentual foi de 10%');
    console.log('O aumento foi de ' + (salarioDepois - salario));
    console.log('O salario reajustado é de ' + salarioDepois);
}
else if (salario => 1500) {
    let salarioDepois = salario * 1.05;
    console.log('O salario era de ' + salario)
    console.log('O aumento percentual foi de 5%');
    console.log('O aumento foi de ' + (salarioDepois - salario));
    console.log('O salario reajustado é de ' + salarioDepois);
}