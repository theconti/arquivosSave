// function power(base, exponent) {
//     if (exponent == 0) {
//         return 1;
//     } else {
//         return base * power(base, exponent - 1);
//     }
// }
// // console.log(power(2, 2));
// let x = "h";
// x -= 5;

// console.log(x);
function sum(arr, n) {
    // Only change code below this line
    if (n <= 0) {
        return;
    } else {
        return sum(arr, n - 1) + arr[n - 1];
    }
    // Only change code above this line
}
console.log(sum([1], 0));
