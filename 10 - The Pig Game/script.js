'use strict';

// Slecting elements
const sectionPlayer0 = document.querySelector('.player--0');
const sectionPlayer1 = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const dice = document.querySelector('.dice');
let current0EL = document.querySelector('#current--0');
let current1EL = document.querySelector('#current--1');
const diceImg = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNewGame = document.querySelector('.btn--new');

score0El.textContent = 0;
score1El.textContent = 0;
dice.classList.add('hidden');

let current0 = 0;
let score0 = 0;
let current1 = 0;
let score1 = 0;
let playerAction0 = true;
let playerAction1 = false;

const rollDice = () => {
  let diceNumber = () => {
    return Math.trunc(Math.random() * 6) + 1;
  };

  if (playerAction0) {
    diceNum(diceNumber());
    sectionPlayer0.classList.add('player--active');
    sectionPlayer1.classList.remove('player--active');
    addActiveClass();
    return;
  }

  if (playerAction1) {
    sectionPlayer1.classList.add('player--active');
    sectionPlayer0.classList.remove('player--active');
    diceNum(diceNumber());
    addActiveClass();
    return;
  }
};

btnRoll.addEventListener('click', rollDice);

const diceNum = dice => {
  switch (dice) {
    case 1:
      setDiceImg(dice);
      console.log(1 + '. Então, troca');
      if (playerAction0) {
        playerAction0 = false;
        playerAction1 = true;
        current0 = 0;
        current0EL.textContent = 0;
        break;
      }
      if (playerAction1) {
        current1 = 0;
        playerAction1 = false;
        playerAction0 = true;
        current1EL.textContent = 0;
        break;
      }
    case 2:
      setDiceImg(dice);
      addValueOnCurrent(dice);
      break;
    case 3:
      setDiceImg(dice);
      addValueOnCurrent(dice);
      break;
    case 4:
      setDiceImg(dice);
      addValueOnCurrent(dice);
      break;
    case 5:
      setDiceImg(dice);
      addValueOnCurrent(dice);
      break;
    case 6:
      setDiceImg(dice);
      addValueOnCurrent(dice);
      break;
    default:
      console.log('none');
  }
};

const addValueOnCurrent = value => {
  if (playerAction0) {
    current0 += value;
    current0EL.textContent = current0;
    console.log('Current0: ' + current0);
    return;
  }

  if (playerAction1) {
    current1 += value;
    current1EL.textContent = current1;
    console.log('Current1: ' + current1);
    return;
  }
};

const hold = () => {
  if (playerAction0) {
    score0 += current0;
    score0El.textContent = score0;
    current0 = 0;
    current0EL.textContent = 0;
    playerAction0 = false;
    playerAction1 = true;
    addActiveClass();

    playerWinner();
    return;
  }

  if (playerAction1) {
    score1 += current1;
    score1El.textContent = score1;
    current1 = 0;
    current1EL.textContent = 0;
    playerAction1 = false;
    playerAction0 = true;
    addActiveClass();
    playerWinner();
    return;
  }
};

btnHold.addEventListener('click', hold);

const addActiveClass = () => {
  if (playerAction0) {
    sectionPlayer0.classList.add('player--active');
    sectionPlayer1.classList.remove('player--active');
  }

  if (playerAction1) {
    sectionPlayer1.classList.add('player--active');
    sectionPlayer0.classList.remove('player--active');
  }
};

const playerWinner = () => {
  if (score0 >= 100) {
    sectionPlayer0.classList.add('player--winner');
    btnHold.setAttribute('disabled', '');
    btnRoll.setAttribute('disabled', '');
  }

  if (score1 >= 100) {
    sectionPlayer1.classList.add('player--winner');
    btnHold.setAttribute('disabled', '');
    btnRoll.setAttribute('disabled', '');
  }
};

const newGame = () => {
  current0 = 0;
  score0 = 0;
  current1 = 0;
  score1 = 0;
  playerAction0 = true;
  playerAction1 = false;
  current1EL.textContent = 0;
  current0EL.textContent = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  dice.classList.add('hidden');
  sectionPlayer0.classList.add('player--active');
  sectionPlayer1.classList.remove('player--active');
  sectionPlayer0.classList.remove('player--winner');
  sectionPlayer1.classList.remove('player--winner');
  btnHold.removeAttribute('disabled');
  btnRoll.removeAttribute('disabled');
  diceImg.classList.add('hidden');
};

btnNewGame.addEventListener('click', newGame);

const setDiceImg = value => {
  diceImg.classList.remove('hidden');
  diceImg.src = `dice-${value}.png`;
};
