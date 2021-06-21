var index = 0;
// audio files

let green = new Audio("simonSound1.mp3");
let red = new Audio("simonSound2.mp3");
let yellow = new Audio("simonSound3.mp3");
let blue = new Audio("simonSound4.mp3");

// start button and directions
const startButton = document.querySelector(".js-start");
const info = document.querySelector(".js-info");

function startGame() {
  startButton.classList.add("hidden");
  info.classList.remove("hidden");
  info.textContent = "Wait for the computer";
  runGame(index);
}


// light-up class - still working on it
// const div = document.createElement('div');
// div.className = 'light-up';
// document.querySelector('.light-up').style.opacity = '70%';

let greenButton = document.querySelector(".simon-button.green");
greenButton.addEventListener("click", function () {
  // alert('You clicked the green button');
  takeInput(0, index);
  let sound = green.cloneNode();
  sound.play();
});

let redButton = document.querySelector(".simon-button.red");
redButton.addEventListener("click", function () {
  // alert("You clicked the red button");
  takeInput(1, index);
  let sound = red.cloneNode();
  sound.play();
});

let yellowButton = document.querySelector(".simon-button.yellow");
yellowButton.addEventListener("click", function () {
  // alert("You clicked the yellow button");
  takeInput(2, index);
  let sound = yellow.cloneNode();
  sound.play();
});

let blueButton = document.querySelector(".simon-button.blue");
blueButton.addEventListener("click", function () {
  // alert("You clicked the blue button");
  takeInput(3, index);
  let sound = blue.cloneNode();
  sound.play();
});

// javascript classList
// how to keep track of the user input
