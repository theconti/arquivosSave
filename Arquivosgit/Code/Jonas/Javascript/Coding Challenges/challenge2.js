// Coding Challenge #2

// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.

// Your tasks:

// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"

// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement

const getBMI = function (mass, height) {
    return mass / height ** height;
};

const showHigherBMI = function () {
    const higherBMI =
        getBMI(markWeight, markHeight) - getBMI(johnWeight, johnHeight);

    if (higherBMI > 0) {
        return `mark's BMI (${getBMI(
            markWeight,
            markHeight
        )}) is greater than John's (${getBMI(johnWeight, johnHeight)})`;
    } else if (higherBMI < 0) {
        return `mark's BMI (${getBMI(
            markWeight,
            markHeight
        )}) is lower than John's (${getBMI(johnWeight, johnHeight)})`;
    } else {
        return `mark's BMI (${getBMI(
            markWeight,
            markHeight
        )}) is the same as John's (${getBMI(johnWeight, johnHeight)})`;
    }
};

let markWeight = 78;
let johnWeight = 92;
let markHeight = 1.69;
let johnHeight = 1.95;

console.log(showHigherBMI());

markWeight = 95;
johnWeight = 85;
markHeight = 1.88;
johnHeight = 1.76;

console.log(showHigherBMI());