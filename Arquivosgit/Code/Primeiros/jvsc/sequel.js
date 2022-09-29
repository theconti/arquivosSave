function SeriesSum(n) {
    let sol = 1;
    for (let i = 2; i <= n; i++) {
        sol += 1 / (i + 3).toFixed(2);
    }
    return sol.toFixed(2);
}

let a = 12731983712;

let arr = [1, 111, 55, 3, 5, 7, 8, 9, 11];

class SmallestIntegerFinder {
    findSmallestInt(args) {
        let smallestNumber = args[0];
        for (let i = 0; i < args.length; i++) {
            if (args[i] < smallestNumber) {
                smallestNumber = args[i];
            }
        }
        return smallestNumber;
    }
}

var number = function (busStops) {
    return busStops
        .map(i => -i[0] + i[1])
        .reduce((total, stops) => {
            return total + stops;
        }, 0);
};

function find_average(array) {
    if (array.length <= 0) return 0;
    return array.reduce((total, current) => total + current, 0) / array.length;
}

function twoSum(numbers, target) {
    let solution = [];
    loop1: for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) {
                solution.push(i);
                solution.push(j);
                break loop1;
            }
        }
    }
    return solution;
}

function findOutlier(integers) {
    let oddOrEven = integers.reduce((total, current) => {
        return total + (current % 2);
    }, 0);
    for (let i = 0; i < integers.length; i++) {
        if (oddOrEven > 1) {
            if (integers[i] % 2 === 0) return integers[i];
        } else {
            if (integers[i] % 2 === 1) return integers[i];
        }
    }
}

function filter_list(l) {
    return l.filter(element => typeof element == 'number');
}

let lista = [1, 2, 'aasf', '1', '123', 123, 0];

function addBinary(a, b) {
    let binaryToBe = a + b;
}

function sumArray(array) {
    return array.slice(1, -1).reduce((total, number) => total + number, 0);
}

console.log(sumArray(arr));
