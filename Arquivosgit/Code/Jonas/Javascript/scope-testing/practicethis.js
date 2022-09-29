'use strict';

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

const arrowFunc = () => {
  console.log(this);
};

arrowFunc();
