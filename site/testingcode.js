// just using this page to test some code for some functions of the game

const simon-buttons
const sequence = [
  greenButton,
    redButton,
    yellowButton,
    blueButton
];



const sequence = [
  greenButton,
    redButton,
    yellowButton,
    blueButton
];

const flash = (simon-button) => {
  return new Promise((resolve, reject) => {
    simon-button.className += ' active';
    setTimeout(() => {
      simon-button.className = simon-button.ClassName.replace(
        ' active'
        ''
        );
        setTimeout(() => {}
        resolve();
    }, 250);
     1000);
    });
};

let playerClick = false;
const buttonClicked = simon-button => {
  if (!playerClick) return;
  console.log(panel);
};

const main = async () => {
  for (let panel of sequence) {
    await flash(simon-button);
  }
playerClick = true;
};

const getRandomButton = () => {
  const simon-buttons = {
    greenButton,
    redButton,
    yellowButton,
    blueButton
  ];
  return simon-buttons [parseInt(Math.random() * simon-buttons.length)];
};
