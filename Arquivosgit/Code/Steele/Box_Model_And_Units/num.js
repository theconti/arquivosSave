function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false;
        }
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false;
        }
    }
    return true;
}

//same([1, 2, 3, 2, 5], [9, 1, 4, 4, 11]);

//console.log(same([1, 2, 3, 2, 5], [9, 1, 4, 4, 11]));

const teste = { a: 'trum', b: 'jum', c: 'rom', d: 'aar', e: 'juim' };

// for (let key in teste) {
//     if (teste[key] == 'trum') {
//         console.log(key);
//     }
// }
// DON'T TOUCH THIS LINE!
const message = '    TASTE THE RAINBOW!  '; //DON'T CHANGE THIS LINE PLEASE!

// YOUR CODE BELOW THIS LINE:
let whisper = message.toLowerCase().split(' ').join('');
// DON'T TOUCH THIS LINE! (please)
const word = 'skateboard'; //Don't change this line!

// YOUR CODE BELOW THIS LINE:
let facialHair = word.slice(5).replace('o', 'e');

const planets = ['The Moon', 'Venus', 'Earth', 'Mars', 'Jupiter']; //DO NOT TOUCH THIS LINE!

// YOUR CODE GOES BELOW THIS LINE:
planets.shift();
planets.unshift('Mercury');
planets.push('Saturn');

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

function returnDay(number) {
    if (number > 7 || number < 1) return null;
    daysOfWeek = {
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday',
        5: 'Friday',
        6: 'Saturday',
        7: 'Sunday',
    };
    return daysOfWeek[number];
}

const fullNames = [
    { first: 'Albus', last: 'Dumbledore' },
    { first: 'Harry', last: 'Potter' },
    { first: 'Hermione', last: 'Granger' },
    { first: 'Ron', last: 'Weasley' },
    { first: 'Rubeus', last: 'Hagrid' },
    { first: 'Minerva', last: 'McGonagall' },
    { first: 'Severus', last: 'Snape' },
];

// Write your code here
let firstName = [];
fullNames.map(index => firstName.push(index.first));

const validUserNames = arrayOfStrings => arrayOfStrings.filter(index => (index.length < 10))

console.log(firstName);
