const prompt = require("prompt-sync")();

/*function opera(x) {
    if (x % 3 == 0) {
        console.log(true);
    } else {
        console.log(false);
    }
}

opera(6);

function rever(x, z, y) {
    x;
    z;
    y;
    for (let i = x; i == z; i++) {
        console.log("chegou ao seu destino");
    }
}

console.log(rever(7, 50, 1));
let a = "loose";

function disemvowel(str) {
    let final = str.replace(/[aeiou]/gi, "");
    console.log(final);
}

disemvowel(a);
*/
function sortArray(array) {
    let arr = [];
    for (i = 0; i < array.length - 1; i++) {
        if (array[i] % 2 !== 0) {
            arr.push(array[i]);
        }
    }
    arr.sort(function (a, b) {
        return a - b;
    });
    for (let i of arr) {
        if (array[i] % 2 == 0) {
            arr.splice(i, 0, array[i]);
        }
    }
    array = arr;
    console.log(array);
    return array;
}

const test = [5, 3, 2, 8, 1, 4];

sortArray(test);
