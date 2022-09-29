function calculateTax(amount) {
    let result = amount * 0.0825;
    return result;
}

let tax = calculateTax(780);
console.log(tax);