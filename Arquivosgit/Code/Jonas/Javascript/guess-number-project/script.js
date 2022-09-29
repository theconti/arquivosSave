// todo : refactor code => more functions that change dom; style.css
'use strict';

const messageTextContent = message => {
    document.querySelector('.message').textContent = message;
};
const randomNumber = () => Math.trunc(Math.random() * 100) + 1;
let score = 20;
let secretNumber = randomNumber();
let highscore = 0;

document.querySelector('.number').textContent = secretNumber + '?';

// Check button...
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.input__Guess').value);
    console.log(typeof guess);

    //When there is no valid input
    if (!guess) {
        messageTextContent('Not a valid number!');

        //When player wins
    } else if (guess === secretNumber) {
        document.querySelector('.number').textContent = secretNumber;
        messageTextContent('You guessed right!');
        document.querySelector('body').style.backgroundColor = '#60b347';
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = score;
        }
        //document.querySelector('.number').style.width = '10rem';

        //When guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            messageTextContent(
                guess > secretNumber
                    ? 'This number is too high'
                    : 'This number is too low'
            );

            score--;
            document.querySelector('.score').textContent = score;
        } else {
            messageTextContent('You Lost the game!');
            document.querySelector('.score').textContent = 0;
        }
    }
});

// Again Button...

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    document.querySelector('.score').textContent = score;
    secretNumber = randomNumber();
    // erase line below before ready
    console.log(secretNumber);
    document.querySelector('.number').textContent = secretNumber + '?';
    document.querySelector('body').style.backgroundColor = '#FFF';
    messageTextContent('Start guessing...');
    document.querySelector('.input__Guess').value = '';
    //document.querySelector('.number').style.width = '1rem'
});
