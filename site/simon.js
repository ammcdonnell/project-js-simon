// This file contains the game logic.
// All the event-listening should happen in buttons.js

let sequence = [];
let humanSequence = [];

const startButton = document.querySelector('.js-start');
const info = document.querySelector('.js-info');

function startGame() {
  startButton.classList.add('hidden');
  info.classList.remove('hidden');
  info.textContent = 'Wait for the computer';
}
startButton.addEventListener('click', startGame);

// comparison of what the computer has entered vs. what the user has entered
// how to make the sequence of buttons
