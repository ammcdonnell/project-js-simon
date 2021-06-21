// This file contains the game logic.
// All the event-listening should happen in buttons.js

let sequence = [];
let humanSequence = [];
let round = 1;
let i = 0;
let buttonCount = 0;
let roundClear = false;

// comparison of what the computer has entered vs. what the user has entered
// how to make the sequence of buttons
var newNumber;
var gameOver = false;

//Adds a random integer between 0-3 that correspond to the 4 buttons that can be pressed
function addtoSequence() {
  newNumber = Math.random() * 4;
  newNumber = Math.floor(newNumber);
  sequence.push(newNumber);
  humanSequence.push(newNumber);
  console.log("New Button: " + newNumber);
  console.log("HQ: " + humanSequence);
  console.log("CQ: " + sequence);
}

function takeInput(buttonPressed, playerIndex) {
  //Everytime you press a button the index of that press will be updated
  //in the human sequence. This is called in button.js
  console.log("Button Recieved: " + buttonPressed);
  console.log("Player index: " + playerIndex);
  humanSequence[playerIndex] = buttonPressed;
  buttonCount++;
  //After it is updated the button is sequences are checked
  checkInput();
  if (gameOver) {
    endGame();
  } else if ((roundClear = true)) {
    roundClear = false;
    runGame();
  }
  //After the sequences are checked, the index is updated so the next button can be pressed
  else {
    playerIndex++;
  }
}

function checkInput() {
  //If you click the wrong button the two arrays will be different and it will be game over
  if (sequence != humanSequence) {
    console.log(sequence + " Does not equal " + humanSequence);
    gameOver = true;
  } else if ((buttonCount = sequence.length)) {
    roundClear = true;
  }
}

function flash(simonButton) {
  //Flash the button for a specified amount of time;
  document.querySelector(simonButton).classList.add("light-up");
}

function runGame() {
  console.log("round started");
  info.textContent = "Wait for the computer";
  //Adds a button to the sequence
  addtoSequence();
  //Flashes all the buttons in the sequence in order
  for (button in sequence) {
    if ((button = 0)) {
      flash(".simon-button.green");
    } else if ((button = 1)) {
      flash(".simon-button.red");
    } else if ((button = 2)) {
      flash(".simon-button.yellow");
    } else if ((button = 3)) {
      flash(".simon-button.blue");
    }
    setTimeout(clearColor, 2000);
  }
  // info.textContent = "Your turn";
}

function clearColor() {
  document.querySelector(".simon-button.red").classList.remove("light-up");
  document.querySelector(".simon-button.green").classList.remove("light-up");
  document.querySelector(".simon-button.blue").classList.remove("light-up");
  document.querySelector(".simon-button.yellow").classList.remove("light-up");
}

function compterup() {
  setTimeout(clearColor, 1500);
  for (i in sequence) {
    switch (sequence[i]) {
      case 1:
        document.querySelector(".simon-button.red").classList.add("light-up");
        let sound2 = red.cloneNode();
        sound2.play();
        break;
      case 0:
        document.querySelector(".simon-button.green").classList.add("light-up");
        let sound1 = green.cloneNode();
        sound1.play();
        break;
      case 3:
        document.querySelector(".simon-button.blue").classList.add("light-up");
        let sound4 = blue.cloneNode();
        sound4.play();
        break;
      case 2:
        document
          .querySelector(".simon-button.yellow")
          .classList.add("light-up");
        let sound3 = yellow.cloneNode();
        sound3.play();
        break;
      default:
        console.log("?");
    }
    setTimeout(lightup, 1500);
    clearColor();
  }
}

function endGame() {
  //Resets the sequences
  alert("Game Over");
  // info.textContent = "Game Over";
  sequence = [];
  humanSequence = [];
  level = 0;
  info.classList.add("hidden");
  startButton.classList.remove("hidden");
  // startButton.textContent = "Try Again?";
  // heading.textContent = "Simon Game";
  // tileContainer.classList.add("unclickable");
}

//Show your score and have a play again button maybe?
