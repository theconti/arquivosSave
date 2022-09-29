/*let resultados = [];


function dado() {
    let number = Math.trunc(1 + Math.random() * 6);
    return number;
}
for (let i = 0; i < 101; i++) {
    resultados.push(dado());
}
resultados.forEach(number=> {
    
        
    }
});*/

//console.log(resultados);

var prompt = require("prompt-sync")();

const total = [];
const vezes1 = [];
const vezes2 = [];
const vezes3 = [];
const vezes4 = [];
const vezes5 = [];
const vezes6 = [];

for (var i = 0; i < 100; i++) {
    x = Math.ceil(Math.random() * 6);
    total.push(x);
}
for (var i = 0; i < total.length; i++) {
    if (total[i] == 1) {
        vezes1.push(total[i]);
    }

    if (total[i] == 2) {
        vezes2.push(total[i]);
    }
    if (total[i] == 3) {
        vezes3.push(total[i]);
    }
    if (total[i] == 4) {
        vezes4.push(total[i]);
    }
    if (total[i] == 5) {
        vezes5.push(total[i]);
    }
    if (total[i] == 6) {
        vezes6.push(total[i]);
    }
}

console.log("O número 1 foi jogado " + vezes1.length + " vezes");
console.log("O número 2 foi jogado " + vezes2.length + " vezes");
console.log("O número 3 foi jogado " + vezes3.length + " vezes");
console.log("O número 4 foi jogado " + vezes4.length + " vezes");
console.log("O número 5 foi jogado " + vezes5.length + " vezes");
console.log("O número 6 foi jogado " + vezes6.length + " vezes");

/*
const total = [];

for (var i = 0; i < 100; i++) {
    x = Math.ceil(Math.random() * 6);
    total.push(x);
}

function num1(value) {
    if (value == 1) return value;
}
function num2(value) {
    if (value == 2) return value;
}
function num3(value) {
    if (value == 3) return value;
}
function num4(value) {
    if (value == 4) return value;
}
function num5(value) {
    if (value == 5) return value;
}
function num6(value) {
    if (value == 6) return value;
}

const vezes1 = total.filter(num1);
const vezes2 = total.filter(num2);
const vezes3 = total.filter(num3);
const vezes4 = total.filter(num4);
const vezes5 = total.filter(num5);
const vezes6 = total.filter(num6);

console.log("O número 1 foi jogado " + vezes1.length + " vezes");
console.log("O número 2 foi jogado " + vezes2.length + " vezes");
console.log("O número 3 foi jogado " + vezes3.length + " vezes");
console.log("O número 4 foi jogado " + vezes4.length + " vezes");
console.log("O número 5 foi jogado " + vezes5.length + " vezes");
console.log("O número 6 foi jogado " + vezes6.length + " vezes");
*/
