function abbrevName(name) {
    return name.match(/[^a-z ]/g).join('.');
}

function reverseWords(str) {
    let arr = str.split(' ');
    arr.forEach(word => {
        word.split('').reverse().join(' ');
    });
    console.log(arr);
    arr.join('');

    return arr;
}

function reverse(str) {
    return str.split('').reverse().join('').split(' ').reverse().join(' ');
}

function printerError(s) {
    let numbersOfErrors = '';
    if (!/[^a-m]/gi.test(s)) numbersOfErrors = 0;
    if (/[^a-m]/gi.test(s)) numbersOfErrors = s.match(/[^a-m]/gi).length;
    return `${numbersOfErrors}/${s.length}`;
}

function test(s) {
    return s.match(/[^a-m]/gi);
}

let testing = 'aaaaaaaaaaa';

function reg(tes) {
    let regexTeste = `/${tes}/`;
    let abc = 'ab';
    const feita = abc.match(regexTeste);
    console.log(feita);
    return feita;
}

console.log(reg('abc'));

//console.log(''.length);
