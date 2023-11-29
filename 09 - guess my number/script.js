'use strict';

// document.querySelector('.message').textContent;
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value;
let highScore = document.querySelector('.highscore');
const tryAgain = document.querySelector('.again');
tryAgain.addEventListener('click', () => {
  location.reload();
});

let score = 20;
document.querySelector('.score').textContent = score;
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = '?';
console.log(secretNumber);

const checkBtn = document.querySelector('.check');

checkBtn.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = '💢 No Number!';
  } else if (guess == secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number';
    document.querySelector('.number').textContent = secretNumber;

    document.body.style.backgroundColor = '#16a34a';
    endGame();
    saveHighScore(score);
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = '📈 Too High!';
    decreaseNumber();
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = '📉 Too Low!';
    decreaseNumber();
  }
});

function saveHighScore(score) {
  const getHighScore = localStorage.getItem('HighScore');
  if (getHighScore > score) return;
  localStorage.setItem('HighScore', score);
  highScore.textContent = score;
}

const loadHighScore = () => {
  const getScore = localStorage.getItem('HighScore');
  if (getScore) highScore.innerHTML = getScore;
};

function decreaseNumber() {
  if (score > 1) {
    score--;
    document.querySelector('.score').textContent = score;
    return;
  } else {
    document.querySelector('.score').textContent = 0;
    document.querySelector('.message').textContent =
      'You Lost! Try again if you want.';
    document.body.style.backgroundColor = '#450a0a';
    endGame();
  }
}

function endGame() {
  document.querySelector('.guess').setAttribute('disabled', '');
  checkBtn.setAttribute('disabled', '');
  checkBtn.classList.add('disabled');
}
