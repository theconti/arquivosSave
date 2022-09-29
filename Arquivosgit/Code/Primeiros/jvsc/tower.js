//my first solution

function towerBuilder(nFloors) {
    n = nFloors;
    let floor = '';
    const arr = [];
    let l;
    let k;
    let b;

    for (i = 1; i <= n; i++) {
        for (l = n; l > 1; l--) {}

        for (b = 1; b < n; b++) {
            if (b >= k - i) {
                floor += '*';
            } else {
                floor += ' ';
            }
        }

        for (k = 1; k <= n; k++) {
            if (k >= l + i) {
                floor += ' ';
            } else {
                floor += '*';
            }
        }
        arr.push(floor);
        floor = '';
    }
    console.log(arr);
}

towerBuilder(6);

// clever solution

function cleverTower(floors) {
    let space;
    let star;
    let tower = [];

    for (let i = 1; i < floors; i++) {
        space = ' '.repeat(floors - 1);
        star = '*'.repeat(2 * i - 1);
        tower.push(`${space}${star}${space}`);
    }
}

cleverTower(6);
