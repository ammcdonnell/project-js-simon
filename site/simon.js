// This file contains the game logic.
// All the event-listening should happen in buttons.js

let sequence = [];
let humanSequence = [];
let round = 1;
let i = 0

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

function checkPlayer() {
  console.log(moves, comp)
  if (moves.length == comp.length) { //compares move lengths to see if turn is over
    if (JSON.stringify(moves) == JSON.stringify(comp)) { // checks to see if user moves match computer moves 
      // comp move
      generateNextColor ();
      i = 0;
      setTimeout(lightup, 1500);
      else {
        fail();
      }
    } else {
      //if user moves dont match computer moves during turn then use fails
      for (let i = 0; i < moves.length; i++) {
        if (moves[i] !== comp[i]) {
          fail();
          return;
        }
      }  
}
function lightup() {
  setTimeout(clearColor, 1500)
  if (i < comp.length) {
    document.querySelector('.${comp[i]}').classList.add("light-up");
    switch (comp[i]) {
  case "red":
      let sound1 = red.cloneNode();
      sound1.play();
      break;
  case "green":
     let sound2 = green.cloneNode();
     sound2.play();
     break;
  case "blue":
    let sound3 = blue.cloneNode();
    sound3.play();
    break;
  case "yellow":
  let sound4 = yellow.cloneNode();
  sound4.play();
  break;
  default:
    console.log("?");



    }
    setTimeout(lightup, 1500);
  } else {
    clearColor();
  }
}

function endGame(text) {
  //Resets the sequences
  alert(text);
  sequence = [];
  humanSequence = [];
  level = 0;
  startButton.classList.remove('hidden');
  heading.textContent = 'Simon Game';
  info.classList.add('hidden');
  tileContainer.classList.add('unclickable');
}

  //Show your score and have a play again button maybe?

  