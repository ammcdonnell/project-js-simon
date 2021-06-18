// This file contains the game logic.
// All the event-listening should happen in buttons.js

let sequence = [];
let humanSequence = [];

const startButton = document.querySelector('.js-start');

function startGame() {
  startButton.classList.add('directions');
}
info.classList.remove('hidden');
info.textContent = 'Wait for the computer';

startButton.addEventListener('click', startGame);
