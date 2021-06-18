// This file contains the game logic.
// All the event-listening should happen in buttons.js

let sequence = [];
let humanSequence = [];
let level = 0;

let greenButton = document.querySelector(".simon-button.green");
let redButton = document.querySelector(".simon-button.red");
let yellowButton = document.querySelector(".simon-button.yellow");
let blueButton = document.querySelector(".simon-button.blue");

// comparison of what the computer has entered vs. what the user has entered
// how to make the sequence of buttons
var newNumber;
var gameOver = false;
var arraySize;

//Adds a random integer between 0-3 that correspond to the 4 buttons that can be pressed
function addtoSequence() {
  newNumber = Math.random() * 4;
  newNumber = Math.floor(newNumber);
  sequence.push(newNumber);
  humanSequence.push(newNumber);
}

function takeInput(buttonPressed, index) {
  //Everytime you press a button the index of that press will be updated
  //in the human sequence. This is called in button.js
  humanSequence[index] = buttonPressed;
  //After it is updated the button is sequences are checked
  checkInput();
  //After the sequences are checked, the index is updated so the next button can be pressed
  index++;
}

function checkInput() {
  //If you click the wrong button the two arrays will be different and it will be game over
  if (sequence != humanSequence) {
    gameOver = true;
  }
}

function flash(simonButton) {
  //Flash the button for a specified amount of time;
}

function runGame(index) {
  index = 0;
  arraySize = sequence.length();
  //Adds a button to the sequence
  addtoSequence();
  //Flashes all the buttons in the sequence in order
  for (button in sequence) {
    if ((button = 0)) {
      flash(greenButton);
    } else if ((button = 1)) {
      flash(redButton);
    } else if ((button = 2)) {
      flash(yellowButton);
    } else if ((button = 3)) {
      flash(blueButton);
    }
  }
  //Does nothing until you have pressed all the buttons correctly
  //or you press the wrong button and lose the game
  while (index != arraySize || !gameOver) {}

  //If game over end the game
  if (gameOver) {
    endGame();

    //Else run the game function again
  } else {
    runGame;
  }
}

function endGame() {
  //Resets the sequences
  sequence = [];
  humanSequence = [];
  //Show your score and have a play again button maybe?
}
