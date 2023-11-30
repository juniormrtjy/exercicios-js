'use strict'

let highScore = document.querySelector('.highscore')
const tryAgain = document.querySelector('.again')
const clearHghScore = document.querySelector('.clear')

// FUNCTIONS
tryAgain.addEventListener('click', () => {
  location.reload()
})

// DISPLAY MESSAGE
const displayMessage = message => {
  document.querySelector('.message').textContent = message
}

// DISPLAY SCORE
const displayScore = score => {
  document.querySelector('.score').textContent = score
}

// DISPLAY NUMBER
const displayNumber = number => {
  document.querySelector('.number').textContent = number
}

// SAVE HIGHSCORE
const saveHighScore = score => {
  const getHighScore = localStorage.getItem('HighScore')
  if (getHighScore > score) return
  localStorage.setItem('HighScore', score)
  highScore.textContent = score
}

// CLEAR HIGHSCORE FROM LOCALSTORAGE
clearHghScore.addEventListener('click', () => {
  localStorage.setItem('HighScore', 0)
  highScore.textContent = 0
})

// DECREASENUMBER
const decreaseNumber = (guess, secretNumber) => {
  if (score > 1) {
    displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!')
    score--
    displayScore(score)
    return
  } else {
    displayScore(0)
    displayMessage('You Lost! Try again if you want.')
    displayNumber(secretNumber)
    document.body.style.backgroundColor = '#450a0a'
    endGame()
  }
}

// ENDGAME
const endGame = () => {
  document.querySelector('.guess').setAttribute('disabled', '')
  checkBtn.setAttribute('disabled', '')
  checkBtn.classList.add('disabled')
}

// SET SCORE
let score = 20
displayScore(score)

// GENERATE RANDOM NUMBER BETWEEN 1 AND 20
const secretNumber = Math.trunc(Math.random() * 20) + 1

// CHECK YOUR NUMBER
const checkBtn = document.querySelector('.check')
checkBtn.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value)
  console.log(guess)

  if (!guess) {
    displayMessage('💢 No Number!')
  } else if (guess == secretNumber) {
    displayMessage('🎉 Correct Number')
    displayNumber(secretNumber)

    document.body.style.backgroundColor = '#16a34a'
    endGame()
    saveHighScore(score)
  } else if (guess !== secretNumber) {
    decreaseNumber(guess, secretNumber)
  }
})

// LOAD HIGHSCORE ON LOAD PAGE
const loadHighScore = () => {
  const getScore = localStorage.getItem('HighScore')
  if (getScore) highScore.innerHTML = getScore
}
