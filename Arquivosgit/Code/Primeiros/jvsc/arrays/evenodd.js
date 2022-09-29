var prompt = require("prompt-sync")();

const listinha = [];
let x = 0;
const even = [];
const total = [];
const odd = [];
/*
function counter () {
    for (var i = 1; i < 21; i++){
    x++;
    listinha.push(x);
    }
    }

counter()
console.log(listinha); 

for (var i = 1; i < 21; i++) {
    x++;
    listinha.push(x);
}
console.log(listinha);
*/
/*
for (var i = 1; i < 5; i++) {
  listinha.push(prompt("insira um número"));
}
console.log(listinha);
*/
for (var i = 1; i < 21; i++) {
  x++;
  total.push(x);
}

total.forEach((number) => {
  if (number % 2 === 0) {
    even.push(number);
  }
});

total.forEach((number) => {
  if (number % 2 === 1) {
    odd.push(number);
  }
});

console.log(total);
console.log(even);
console.log(odd);

odd.reverse();

odd.pop();
console.log(odd);


/*const total = [];
const par = [];
const impar = [];

for (var i = 0; i < 20; i++) {
    x = Math.trunc(Math.random() * 100);
    total.push(x);
}

total.forEach((number) => {
    if (number % 2 == 0) {
        par.push(number);
    } else {
        impar.push(number);
    }
});

console.log(total);
console.log(par);
console.log(impar);
////*/