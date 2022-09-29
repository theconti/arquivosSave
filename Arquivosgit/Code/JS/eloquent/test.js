//let x = 0 || 78;

//console.log(x);
/*
function tes(a, b) {
    let c = a + b;
    return c;
}

tes(4, 5);
*/
let count = 0;

function cc(card) {
    // Only change code below this line
    let minus = ["K", "J", "Q", "10", "A"];
    if (minus.indexOf(card) >= 0) {
        count--;
    } else if (card == 2 || card == 3 || card == 4 || card == 5 || card == 6) {
        count++;
    }
    if (count > 0) {
        console.log(`${count} Bet`);
    } else if (count <= 0) {
        console.log(`${count} Hold`);
    }
    // Only change code above this line
}

cc(2);
cc(3);
cc(7);
cc("K");
cc("A");
