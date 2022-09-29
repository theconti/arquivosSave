function findNextSquare(sq) {
    let answer;
    if (!Number.isInteger(Math.sqrt(sq))) return -1;
    else {
        for (let i = sq + 1; i < Infinity; i++) {
            if (Number.isInteger(Math.sqrt(i))) {
                answer = i;
                break;
            }
        }
        return answer;
    }
}

const zero = [0, 1, 3, 0, 0, 0, 2, 4, false, 'bruno', 0, 1, 'bia'];
const proximo = [9, 0, 0, 9, 1, 2, 0, 1, 0, 1, 0, 3, 0, 1, 9, 0, 0, 0, 0, 9];

function moveZeros(arr) {
    let mapa = arr.filter(index => index === 0);
    for (let i = 0; i < arr.length; i++) {
        while (arr[i] === 0) {
            arr.splice(i, 1);
        }
    }
    return arr.concat(mapa);
}

function humanReadable(s) {
    let hours = String(Math.floor(s / 3600)).padStart(2, '0');
    let minutes = String(Math.floor((s % 3600) / 60)).padStart(2, '0');
    let seconds = String((s % 3600) % 60).padStart(2, '0');

    return `${hours}:${minutes}:${seconds}`;
}

const tes = ['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST'];

function dirReduc(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        while (
            (arr[i] === 'NORTH' && arr[i + 1] === 'SOUTH') ||
            (arr[i] === 'SOUTH' && arr[i + 1] === 'NORTH') ||
            (arr[i] === 'EAST' && arr[i + 1] === 'WEST') ||
            (arr[i] === 'WEST' && arr[i + 1] === 'EAST')
        ) {
            arr.splice(i, 2);
            i = 0;
        }
    }
    return arr;
}

//tes.splice(0, 2);

console.log(tes);
let t1 = performance.now();
dirReduc(tes);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`);
