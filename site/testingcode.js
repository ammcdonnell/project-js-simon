// just using this page to test some code for some functions of the game

const simon-buttons
const sequence = [
  greenButton,
    redButton,
    yellowButton,
    blueButton
];

// getting a random button

const getRandomButton = () => {
  const simon-buttons = [
    greenButton,
    redButton,
    yellowButton,
    blueButton
  ];
return simon-buttons[parseInt](Math.random() * simon-buttons.length)]
};

const sequence = [getRandomButton()];
let humanSequence = [...sequence];

// flash sequence

const flash = simon-button => {
  return new Promise((resolve) => {
    simon-button.className += ' active';
    setTimeout(() => {
      simon-button.className = simon-button.ClassName.replace(
        // adding light up class active
        ' active'
        // removing this class
        ''
        );
        setTimeout(() => {
        resolve();
    }, 250);
   }, 1000);
 });
};

// checking if player clicked on the right panel
let playerClick = false;

const buttonClicked = buttonClicked => {
  if (!playerClick) return;
  const expectedButton = humanSequence.shift();
  if (expectedButton) === buttonClicked) {
    if (humanSequence.length === 0) {
      // start new round
      sequence.push(getRandomButton)());
      humanSequence = [...sequence];
      startFlashing();
    }
   } else {
    //  end game
    alert('game over');
   }
};

const startFlashing = async () => {
  playerClick = false;
  for (const simon-button of sequence) {
    await flash(simon-button);
  }
  playerClick = true;
};

startFlashing();
