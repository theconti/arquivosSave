function solution(list) {
    for (let i = 0; i < list.length; i++) {
        if (list[i] + 1 === list[i + 1]) {
        }
    }
}

let test = [
    -10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18,
    19, 20,
];

function check(a, x) {
    return a.indexOf(x) ? true : false;
}

function findOdd(arr) {
    const esper = new Set(arr);
    const control = arr.filter(element => {
        !arr.indexOf(element);
    });
    return control;
}

//console.log(findOdd(arri));

function countingElements(array) {
    const counts = {};

    array.forEach(x => {
        counts[x] = (counts[x] || 0) + 1;
    });

    let x = Object.entries(counts);
    let answer;

    for (let i = 0; i < x.length; i++) {
        if (x[i][1] % 2 === 1) {
            answer = x[i][0];
        }
    }
    return parseInt(answer);
}

let dois = [1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5];
let arri = [20, 1, -1, 2, -2, 3, 3, 1, 2, 4, 20, 4, -1, -2, 5];
let cou = [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1];
let tre = ['A', 'A', 'A', 'B', 'B', 'C', 'D', 'A', 'A', 'B'];

function expandedForm(num) {
    let str = String(num).split('');
    console.log(str);
}

const uniqueInOrder = function (arr) {
    if (typeof arr == 'string') {
        arr = arr.split('');
        console.log(arr);
    }
    return arr.filter((value, index) => {
        if (arr[index] !== arr[index + 1]) return value;
    });
};

function digital_root(n) {
    while (n > 9) {
        n = String(n).split('');
        n = n
            .map(item => Number(item))
            .reduce((total, current) => {
                return total + current;
            }, 0);
    }
    return n;
}

function oot(n) {
    n = String(n).split('');
    console.log(n);
    return n
        .map(item => Number(item))
        .reduce((total, current) => {
            return total + current;
        }, 0);

    // digital_root(next);
    return next;
}

console.log(digital_root(3456));
