// Coding Challenge #1

// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).

// Your tasks:

// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.

// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.

const getBMI = function (mass, height) {
    return mass / height ** height;
};

const showBMI = function () {
    console.log(
        `mark's BMI is ${getBMI(
            markWeight,
            markHeight
        )} and John's BMI is ${getBMI(johnWeight, johnHeight)}`
    );
};

const markHigherBMI = function () {
    return getBMI(markWeight, markHeight) > getBMI(johnWeight, johnHeight);
};

let markWeight = 78;
let johnWeight = 92;
let markHeight = 1.69;
let johnHeight = 1.95;

console.log(markHigherBMI());
showBMI();

markWeight = 95;
johnWeight = 85;
markHeight = 1.88;
johnHeight = 1.76;

console.log(markHigherBMI());
markHigherBMI();
