// var uniqueInOrder = function (iterable) {
//     let solution = iterable.split('');
//     const novo = new Set(solution);
//     return novo;
// };

let tryout = 54548594;

function descendingOrder(n) {
    let numb = String(n)
        .split('')
        .sort((a, b) => b - a)
        .join('');
    return parseInt(numb);
}

//console.log(descendingOrder(tryout));

let arr = [1, 2, 2, 3, 3, 4, 5, 8, 80, 90, 5];

const novo = [...new Set(arr)];
const novoMap = arr.map(item => item + 1);
const novoEach = arr.forEach(item => {
    console.log(arr[item]);
});
const novoReduce = arr.reduce((total, each) => {
    if (each > total) {
        return each;
    }
});
const filtro = arr.filter(item => item > 2);
const novoFind = arr;
const teste = 2 ^ 4;

//console.log(novoMap);
//console.log(novoEach);
console.log(novoReduce);
//console.log(filtro);

//console.log(novo);
