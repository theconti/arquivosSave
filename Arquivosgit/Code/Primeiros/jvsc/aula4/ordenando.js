var prompt = require("prompt-sync")();

let valor1 = +prompt('Insira um número: ');
let valor2 = +prompt('Insira um número: ');
let valor3 = +prompt('Insira um número: ');

let ladoA
let ladoB
let ladoC

if (valor1 > valor2 > valor3) {
    ladoA = valor1
    ladoB = valor2
    ladoC = valor3
}
else if (valor1 > valor3 > valor2) {
    ladoA = valor1
    ladoB = valor3
    ladoC = valor2
}
else if (valor2 > valor1 > valor3) {
    ladoA = valor2
    ladoB = valor1
    ladoC = valor3
}
else if (valor3 > valor1 > valor2) {
    ladoA = valor3
    ladoB = valor1
    ladoC = valor2
}
else if (valor3 > valor2 > valor1) {
    ladoA = valor3
    ladoB = valor2
    ladoC = valor1
}
else if (valor1 == valor2 > valor3) {
    ladoA = valor1
    ladoB = valor2
    ladoC = valor3
}
else if (valor1 == valor3 > valor2) {
    ladoA = valor1
    ladoB = valor3
    ladoC = valor2
}
else if (valor2 == valor3 > valor1) {
    ladoA = valor2
    ladoB = valor3
    ladoC = valor1
}
else if (valor1 == valor2 == valor3) {
    ladoA = valor1
    ladoB = valor2
    ladoC = valor3
}

console.log(ladoA + ' ' + ladoB + " " + ladoC)