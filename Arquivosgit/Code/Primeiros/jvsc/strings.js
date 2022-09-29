let str = 'hello world';
let str1 = 'trtrtsklpt';
// str = str.toLowerCase().replace(/\b[a-z]/g, function (letter) {
//     return letter.toUpperCase();
// });

function capitalizeFirstLetter(string) {
    return string.replace(/^./, string[0].toUpperCase());
}

function getCount(str) {
    console.log(str);
    let vowelsCount = (str.match(/[aeiou]/gi) || []).length;
    return vowelsCount;
}

console.log(getCount(str1));

