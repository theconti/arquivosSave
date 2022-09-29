const prompt = require('prompt-sync')();

// let x = 2;
// let y = 3;
// let z = 4;
// let i = 0;
// let times3 = 1;

// while (i < 11) {
//     times3 = times3 * 3;
//     i++;
//     console.log(times3);
// }

// if (x == "value1") action1();
// else if (x == "value2") action2();
// else if (x == "value3") action3();
// else defaultAction();

// let brick = "#";
// for (let i = 0; i < 6; i++) {
//     console.log(brick);
//     brick = brick + "#";
// }

// printing = (max) => {
//     for (i = 0; i <= max; i++) {
//         if (i % 3 == 0 && i % 5 == 0) {
//             console.log("FizzBuzz");
//         } else if (i % 3 == 0) {
//             console.log("Fizz");
//         } else if (i % 5 == 0) {
//             console.log("Buzz");
//         } else {
//             console.log(i);
//         }
//     }
// };
// printing(100);
// chessboard = (size) => {
//     for (let i = 0; i <= size; i++) {
//         if (i % 2 == 0) {
//             console.log(" # # # #");
//         } else if (i % 2 != 0) {
//             console.log("# # # # ");
//         }
//     }
// };

// chessboard(8);

// console.log(halve(6));

// halve = (n) => {
//     return n / 2;
// };

// console.log(halve(100));
// // → 50
// halve(10);
// halve(200);
// console.log(halve);
// // → 10

// function minus(a, b) {
//     if (b === undefined) return -a;
//     else return a - b;
// }
// console.log(minus(10, 3));
// // → -10
// console.log(minus(2));
//function multiplier(factor) {
//     return (number) => number * factor;
// }
// let twice = multiplier(2);
// console.log(twice(5));
// → 10
// let i = 7;
// let b = 9;

// for (let i = 0; i < 2; i++) {
//     console.log(i);
//     let b = "não funciona aqui";
//     console.log(b);
// }

// console.log(b);

// let x = 1;
// while (x < 10) {
//     console.log((x = x + 1));
//     if (x == 7) break;

// function two() {
//     return function () {
//         console.log("two");
//     };
// }

// let myFunction = two;
// // console.log(myFunction());

// function three() {
//     return function() {
//          return 'three'
//     }
// // }
// function medo(tempo) {
//     for (let i = 0; i < tempo; i++) {
//         setTimeout(function () {
//             console.log(i);
//         }, i * 1000);
// //     }
// // }
// setInterval(loop(), 200);

// function loop() {
//     let x = 1;
//     console.log(x);
//     x++;
// }

// console.log("resto do código");

// const sum = (...args) => {
//     if (args == []) {
//         return 0;
//     }
//     return args.reduce((a, b) => a + b);
// };

// console.log(sum(1, 2, 3, 4, 5));

const car = {
    name: '725i',
    make: 'bmw',
    year: 2020,
    getPrice: function () {
        return 5000;
    },
};

const a = {
    'my property': { b: 'hi!' },
};

const c = {
    myProperty: [
        { string: 'This' },
        { string: 'can' },
        { string: 'get' },
        { string: 'crazy' },
    ],
};

c.myProperty.forEach((element) => {
    console.log(element.string);
});

console.log(Object.keys(a));

Object.assign(a, car);

console.log(Object.keys(a));

let object1 = { value: 10 };
let object2 = object1;
let object3 = { value: 10 };

object1.value = 5;
console.log(object2);
