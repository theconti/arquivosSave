function noisy(f) {
    return (...args) => {
        console.log('calling with', args);
        let result = f(...args);
        console.log(typeof result);
        console.log('called with', args, ', returned', result);
        console.log(typeof result);
        return result;
    };
}
//noisy(Math.min)(3, 2, 1);
// → calling with [3, 2, 1]
// → called with [3, 2, 1] , returned 1

function test(num) {
    return Math.random(num);
}

// const dessert = { type: 'pie' };
// dessert.type = 'pudding';
// const seconds = dessert;
// seconds.type = 'fruits';

// console.log(dessert);
// console.log(seconds);
// console.log(dessert.type);

arr = [
    [2, 3],
    [1, 4],
    [5, 6],
    [7, 9],
];

function merger(array) {
    answer = array.reduce((novo, individual) => {
        return novo.concat(individual);
    }, []);
    console.log(answer);
}

let bird = 'passaro';
// console.log(b);
// console.log(pi);
let pi = Math.PI;
let a = 3;
let b = 10;
a = b;
a = a + 100;
b = b + 10;
//b = pi;
pi = 3;

let z = [0, 1];
let y = [0, 1];
let w = z;
// w.push(2);
// // z.push(3);

// console.log(`z = y é ${z === y}`);
// console.log(`w = y é ${w === z}`);

// console.log(`z equals ${z}`);
// console.log(`w equals ${w}`);
// console.log(`y equals ${y}`);
// console.log(`a equals ${a}`);
// console.log(`b equals ${b}`);

const all = [...z, ...y];

console.log(all);
