const btnP1 = document.querySelector('#addP1');
const btnP2 = document.querySelector('#addP2');
const btnReset = document.querySelector('#resetBtn');
let p1Display = document.querySelector('#p1display');
let p2Display = document.querySelector('#p2display');

let score1 = 0;
let score2 = 0;
let winningScore = 7;
let isGameOver = false;

btnP1.addEventListener('click', () => {
    if (!isGameOver) {
        score1 += 1;
        p1Display.textContent = score1;
        if (score1 === winningScore) {
            isGameOver = true;
        }
    }
});

btnP2.addEventListener('click', () => {
    if (!isGameOver) {
        score2 += 1;
        p2Display.textContent = score2;
        if (score2 === winningScore) {
            isGameOver = true;
        }
    }
});

btnReset.addEventListener('click', () => {
    score1 = 0;
    score2 = 0;
    p2Display.textContent = score2;
    p1Display.textContent = score1;
    isGameOver = false;
});
