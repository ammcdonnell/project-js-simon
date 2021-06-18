// This file contains the game logic.
// All the event-listening should happen in buttons.js

let sequence = [];
let humanSequence = [];

const startButton = document.querySelector('.start-button js-start');
const info = document.querySelector('.directions');

function startGame() {
  startButton.classList.add('directions js-directions hidden');
  info.classList.remove('directions js-directions hidden');
  info.textContent = 'Wait for the computer';
}
startButton.addEventListener('click', startGame);