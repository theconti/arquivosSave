const arr = [1, 2, 3, 6, 8, 9];
const sol = [
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
];

const squareSum = (numbers) =>
    numbers.reduce((total, number) => (total += number * number), 0);

const countSheeps = (arrayOfSheep) => {
    arrayOfSheep.reduce((total, sheep) => {
        return sheep ? total + 1 : total;
    }, 0);
};

console.log(countSheeps(sol));

const countSheep = (arrayOfSheep) => {
    let total = 0;
    arrayOfSheep.forEach((sheep) => {
        if (sheep) total += 1;
    });
    return total;
};
console.log(soma(arr));
