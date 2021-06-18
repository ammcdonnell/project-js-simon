// This file contains the game logic.
// All the event-listening should happen in buttons.js

let sequence = [];
let humanSequence = [];

const startButton = document.querySelector('.js-start');

function startGame() {
  startButton.classList.add('directions');
}

startButton.addEventListener('click', startGame);

<span class="info js-info hidden"></span>