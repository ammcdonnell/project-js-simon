// This file contains the game logic.
// All the event-listening should happen in buttons.js

let sequence = [];
let humanSequence = [];
let round = 1;
let i = 0;
let buttonCount = 0;
let roundClear = false;
let playerIndex = 0;

// comparison of what the computer has entered vs. what the user has entered
// how to make the sequence of buttons
var newNumber;
var gameOver = false;

//Adds a random integer between 0-3 that correspond to the 4 buttons that can be pressed
function addtoSequence() {
  newNumber = Math.random() * 4;
  newNumber = Math.floor(newNumber);
  switch (newNumber) {
    case 0:
      newNumber = "green";
      break;
    case 1:
      newNumber = "red";
      break;
    case 2:
      newNumber = "yellow";
      break;
    case 3:
      newNumber = "blue";
      break;
    default:
      console.log("Im lost");
      break;
  }
  sequence.push(newNumber);
  humanSequence.push(newNumber);
  console.log("New Button: " + newNumber);
  console.log("HQ: " + humanSequence);
  console.log("CQ: " + sequence);
  console.log("ROUND STATE: ", roundClear);
}

function takeInput(buttonPressed) {
  //Everytime you press a button the index of that press will be updated
  //in the human sequence. This is called in button.js
  console.log("Player index: " + playerIndex);
  humanSequence[playerIndex] = buttonPressed;
  buttonCount++;
  //After it is updated the button is sequences are checked
  checkInput();
  if (gameOver) {
    endGame();
  } else if (roundClear === true) {
    console.log("ROUND STATE: ", roundClear);
    console.log("CHECKPOINT");
    roundClear = false;
    runGame();
  } else {
    console.log("PLAYER INDEX INCREASE");
    playerIndex++;
    console.log("Player index: ", playerIndex);
  }
}

function compareArray(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}

function checkInput() {
  //If you click the wrong button the two arrays will be different and it will be game over
  if (!compareArray(sequence, humanSequence)) {
    console.log(sequence, " Does not equal ", humanSequence);
    gameOver = true;
  } else if (buttonCount === sequence.length) {
    roundClear = true;
    buttonCount = 0;
    playerIndex = 0;
  }
}

function flash(simonButton) {
  //Flash the button for a specified amount of time;
  document.querySelector(simonButton).classList.add("light-up");
}

function runGame() {
  console.log("Round started");
  info.textContent = "Wait for the computer";
  //Adds a button to the sequence
  addtoSequence();
  //Flashes all the buttons in the sequence in order
  for (button in sequence) {
    if ((button = "green")) {
      flash(".simon-button.green");
    } else if ((button = "red")) {
      flash(".simon-button.red");
    } else if ((button = "yellow")) {
      flash(".simon-button.yellow");
    } else if ((button = "blue")) {
      flash(".simon-button.blue");
    }
    console.log("CLEARING COLOR");
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
      case "red":
        document.querySelector(".simon-button.red").classList.add("light-up");
        let sound2 = red.cloneNode();
        sound2.play();
        break;
      case "green":
        document.querySelector(".simon-button.green").classList.add("light-up");
        let sound1 = green.cloneNode();
        sound1.play();
        break;
      case "blue":
        document.querySelector(".simon-button.blue").classList.add("light-up");
        let sound4 = blue.cloneNode();
        sound4.play();
        break;
      case "yellow":
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
  location.reload();
  //Resets the sequences
  alert("Game Over");
}

//Show your score and have a play again button maybe?
