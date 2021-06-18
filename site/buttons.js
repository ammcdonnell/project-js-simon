
// start button and directions
const startButton = document.querySelector('.js-start');
const info = document.querySelector('.js-info');

function startGame() {
  startButton.classList.add('hidden');
  info.classList.remove('hidden');
  info.textContent = 'Wait for the computer';
}
startButton.addEventListener('click', startGame);

// light-up class - still working on it
const div = document.createElement('div');
div.className = 'light-up';
document.querySelector('.light-up').style.opacity = '70%';

let greenButton = document.querySelector('.simon-button.green');
greenButton.addEventListener('click', function() {
  alert('You clicked the green button');
  div.classList.remove('light-up');
});

let redButton = document.querySelector('.simon-button.red');
redButton.addEventListener('click', function() {
  alert('You clicked the red button');
});

let yellowButton = document.querySelector('.simon-button.yellow');
yellowButton.addEventListener('click', function() {
  alert('You clicked the yellow button');
});

let blueButton = document.querySelector('.simon-button.blue');
blueButton.addEventListener('click', function() {
  alert('You clicked the blue button');
});

// javascript classList
// how to keep track of the user input
