teste = [-2, -4, -8];

var pa = function (arr) {
    let razao;
    let first = arr[1] - arr[0];
    let second = arr[2] - arr[1];
    let sol;

    if (first == second) {
        razao = first;
    } else {
        if (first > 0) {
            if (first > second) {
                razao = second;
            } else if (second > first) {
                razao = first;
            }
        } else if (first < 0) {
            if (first > second) {
                razao = first;
            } else if (second > first) {
                razao = second;
            }
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i + 1] - arr[i] === 2 * razao) {
            sol = arr[i] + razao;
        }
    }
    return sol;
};

console.log(pa(teste));
