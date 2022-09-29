// function longestConsec(strarr, k) {
//     let longest = '';
//     let longos = [];

//     strarr.forEach((element) => {
//         if (element.length >= longest.length) {
//             longest = element;
//             longos.push(element);
//         }
//     });
//     return longos;
// }
// test = ['tree', 'foling', 'trashy', 'blue', 'abcdef', 'uvwxyz'];

// console.log(longestConsec(test));
let test13 = ['a', 'aa', 'aaa'];
let test14 = ['asdf', 'qwer', 'zxcv'];
let test15 = [
    'asdfasdf fdasdf a sd f',
    ' asdfsdf',
    'asdfasdfds',
    'asdfsdf',
    'asdfsdaf',
];
let test16 = [
    'ddd',
    'dddddddd',
    'dddd',
    'ddddd',
    'ddd',
    'dd',
    'd',
    'd',
    'dddddddddddd',
];

function findLongest(array) {
    var length = 0;
    var longest = '';
    for (var i = 0; i < array.length; i++) {
        if (array[i].length > length) {
            length = array[i].length;
            longest = array[i];
        }
    }
    return 'String : ' + longest + ' Length : ' + length;
}

console.log(findLongest(test13));
console.log(findLongest(test14));
console.log(findLongest(test15));
console.log(findLongest(test16));
