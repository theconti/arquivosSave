'use strict';

// function calcAge(birthyear) {
//   const age = 2023 - birthyear;

//   function printAge() {
//     const output = `You are ${age}, born in ${birthyear}`;
//     console.log(output);

//     if (birthyear >= 1981 && birthyear <= 1996) {
//       const millenial = `Oh, and you're a millenial, ${firstName}!`;
//     }
//   }
//   printAge();
//   return age;
// }
// const firstName = 'Lincoln';
// calcAge(1990);
const obj1 = {
  name: 'bruno',
  age: 17,
  getBirthYear: function () {
    console.log(`this = ${this}`, this === obj1, typeof this);
  },
};

obj1.getBirthYear();
//obj1.name;

function testando() {
  console.log(this);
}

testando();

function paiDoTeste() {
  console.log(`this = ${this}`, this === obj1, typeof this);
  testando();
}

paiDoTeste();
