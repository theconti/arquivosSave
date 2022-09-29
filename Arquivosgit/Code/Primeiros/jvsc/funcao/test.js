/*function sortArray(array) {
    let arr = [];
    for (let i in array) {
        if (array[i] % 2 !== 0) {
            arr.push(array[i]);
        }
    }
    arr.sort(function (a, b) {
        return a - b;
    });

    for (let i in array) {
        if (array[i] % 2 == 0) {
            arr.splice(i, 0, array[i]);
        }
    }
    console.log(arr);
}

const test = [5, 3, 2, 8, 1, 4];

sortArray(test);*/

function solution(word) {
    let resp = [];

    for (let i = 0; i < word.length - 1; i = i + 2) {
        let prep = word[i] + word[i + 1];
        resp.push(prep);
    }
    if (word.length % 2 !== 0) {
        let odd = word[word.length - 1] + "_";
        resp.push(odd);
    }
    console.log(resp);
}
let test = "abdcefg";

solution(test);
