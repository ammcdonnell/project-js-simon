// audio files

// let green = new Audio("sound1.mp3");
// let red = new Audio("sound2.mp3");
// let yellow = new Audio("sound3.mp3");
// let blue = new Audio("sound4.mp3");

// start button and directions
const startButton = document.querySelector(".js-start");
const info = document.querySelector(".js-info");
startButton.addEventListener("click", startGame);

function startGame() {
  console.log("TESTING START BUTTON");
  startButton.classList.add("hidden");
  info.classList.remove("hidden");
  info.textContent = "Wait for the computer";
  console.log("Starting game");
  runGame();
}

let greenButton = document.querySelector(".simon-button.green");
greenButton.addEventListener("click", async function () {
  // alert('You clicked the green button');
  console.log("Player pressed Greeen");
  takeInput("green");
  flash(".simon-button.green");
  await sleep(100);
  clearColor();
  // let sound = green.cloneNode();
  // sound.play();
});

let redButton = document.querySelector(".simon-button.red");
redButton.addEventListener("click", async function () {
  // alert("You clicked the red button");
  console.log("Player pressed Red");
  takeInput("red");
  flash(".simon-button.red");
  await sleep(100);
  clearColor();
  // let sound = red.cloneNode();
  // sound.play();
});

let yellowButton = document.querySelector(".simon-button.yellow");
yellowButton.addEventListener("click", async function () {
  // alert("You clicked the yellow button");
  console.log("Player pressed Yellow");
  takeInput("yellow");
  flash(".simon-button.yellow");
  await sleep(100);
  clearColor();
  // let sound = yellow.cloneNode();
  // sound.play();
});

let blueButton = document.querySelector(".simon-button.blue");
blueButton.addEventListener("click", async function () {
  // alert("You clicked the blue button");
  console.log("Player pressed Blue");
  takeInput("blue");
  flash(".simon-button.blue");
  await sleep(100);
  clearColor();
  // let sound = blue.cloneNode();
  // sound.play();
});

// javascript classList
// how to keep track of the user input
