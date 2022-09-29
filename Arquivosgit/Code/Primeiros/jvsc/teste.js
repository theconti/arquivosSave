// arr = [1, 44, 55, 65, 4, 5, 7, 12, 89, 3, 90];
// seg = [1, 44, 55, 5, 4, 89, 2, 90];

// tes = [3, 4];
// test = [4];

// function arrayDiff(a, b) {
//     if (a === []) {
//         return a;
//     }

//     b.forEach((bElement) => {
//         if (a.includes(bElement)) {
//             a.forEach((aElement) => {
//                 if (element === bElement) {
//                     a.splice(element, 1);
//                 }
//             });
//         }
//     });

//     return a;
// }
// // function isBigEnough(arr) {
// //     return obj;
// // }

// //var filtered = arr.filter(isBigEnough);
// // filtrado é [12, 130, 44]

// console.log(arrayDiff(arr, seg));
// // console.log(arrayDiff(tes, test));
// let parens = '()(';
// let tes = parens.split('');

// console.log(Array.isArray(arr));
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
function suporte(string) {
    function isEven(arr) {
        if (arr.length == 0) return true;
        else {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i + 1]) {
                arr.shift();
                arr.shift();
                break;
            }
        }
        if (arr.length == 1) {
            return false;
        }
        isEven(arr);}
    }
    let argumento = string.split('');

    console.log(isEven(argumento));
    return console.log(isEven(argumento));
}

console.log(suporte('()())())'));
