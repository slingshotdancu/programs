let game = new Phaser.Game(800, 800, Phaser.CANVAS, '', { preload: preload, create: create, update: update });

let player = {};
player.moves = [];
let comp = {};
comp.moves = [];
let counter, turnNumber, compNumber, myTurn;
let blueButton, greenButton, redButton, yellowButton;
let blueAudio, greenAudio, redAudio, yellowAudio;
let startButton, strictModeButton, resetButton;

function preload () {
game.load.image('background', 'assets/bgLayer.png');
game.load.image('greyLayer', 'assets/Layer-2.png');
game.load.image('redButton', 'assets/redLayer.png');
game.load.image('blueButton', 'assets/blueLayer.png');
game.load.image('greenButton', 'assets/greenLayer.png');
game.load.image('yellowButton', 'assets/yellowLayer.png');
game.load.image('yellowCircleButton', 'assets/leftButton.png');
game.load.image('greenCircleButton', 'assets/centerGreenButton.png');
game.load.image('redCircleButton', 'assets/centerRedButton.png');
game.load.image('00', 'assets/num0.png');
game.load.image('01', 'assets/num1.png');
game.load.image('02', 'assets/num2.png');
game.load.image('03', 'assets/num3.png');
game.load.image('04', 'assets/num4.png');
game.load.image('05', 'assets/num5.png');
game.load.image('06', 'assets/num6.png');
game.load.image('07', 'assets/num7.png');
game.load.image('08', 'assets/num8.png');
game.load.image('09', 'assets/num9.png');
game.load.audio('gsfx', ['audio/green.mp3', 'audio/green.ogg']);
game.load.audio('rsfx', ['audio/red.mp3', 'audio/red.ogg']);
game.load.audio('bsfx', ['audio/blue.mp3', 'audio/blue.ogg']);
game.load.audio('ysfx', ['audio/yellow.mp3', 'audio/yellow.ogg']);
//add buzzer sound?
}
function create () {
game.add.tileSprite(0, 0, 800, 800, 'background');
game.add.image(257, 258, 'greyLayer');
counter = game.add.image(378, 435, '00');
blueButton = game.add.image(412, 412, 'blueButton');
greenButton = game.add.image(28, 31, 'greenButton');
redButton = game.add.image(412, 31, 'redButton');
yellowButton = game.add.image(28, 412, 'yellowButton');

blueButton.anchor.set(0);
greenButton.anchor.set(0);
redButton.anchor.set(0);
yellowButton.anchor.set(0);

blueButton.inputEnabled = true;
greenButton.inputEnabled = true;
redButton.inputEnabled =  true;
yellowButton.inputEnabled = true;

blueButton.events.onInputDown.add(onBlueDown, this);
blueButton.events.onInputUp.add(onBlueUp, this);
greenButton.events.onInputDown.add(onGreenDown, this);
greenButton.events.onInputUp.add(onGreenUp, this);
redButton.events.onInputDown.add(onRedDown, this);
redButton.events.onInputUp.add(onRedUp, this);
yellowButton.events.onInputDown.add(onYellowDown, this);
yellowButton.events.onInputUp.add(onYellowUp, this);

greenAudio = game.add.audio('gsfx');
redAudio = game.add.audio('rsfx');
blueAudio = game.add.audio('bsfx');
yellowAudio = game.add.audio('ysfx');

startButton = game.add.image(385, 500, 'greenCircleButton');
startButton.anchor.set(0);
startButton.inputEnabled = true;
startButton.events.onInputDown.add(onStartButtonDown, this);
startButton.events.onInputUp.add(onStartButtonUp, this);

strictModeButton = game.add.image(455, 500, 'yellowCircleButton');
strictModeButton.anchor.set(0);
strictModeButton.inputEnabled = true;
strictModeButton.events.onInputDown.add(onStrictModeButtonDown, this);
strictModeButton.events.onInputUp.add(onStrictModeButtonUp, this);

resetButton = game.add.image(315, 500, 'redCircleButton');
resetButton.anchor.set(0);
resetButton.inputEnabled = true;
resetButton.events.onInputDown.add(onResetButtonDown, this);
resetButton.events.onInputUp.add(onResetButtonUp, this);

}
function update () {

}
function onBlueDown () {
    blueAudio.play();
    blueButton.alpha = 0.3;
}
function onBlueUp () {
  console.log('blue button up');
  console.log('myturn:', myTurn);
    blueButton.alpha = 1;
    if (myTurn === true) {
    pushToPlayerArr("b");
    }
    checkEquality();

}
function onRedDown () {
    redAudio.play();
    redButton.alpha = 0.3;
}
function onRedUp () {
    redButton.alpha = 1;
    if (myTurn === true) {
    pushToPlayerArr("r");
    }
    checkEquality();
}
function onGreenDown () {
  console.trace('green down');
    greenAudio.play();
    greenButton.alpha = 0.3;
}
function onGreenUp () {
    greenButton.alpha = 1;
    if (myTurn === true) {
    pushToPlayerArr("g");
    }
    checkEquality();
}
function onYellowDown () {
    yellowAudio.play();
    yellowButton.alpha = 0.3;
}
function onYellowUp () {
    yellowButton.alpha = 1;
    if (myTurn === true) {
    pushToPlayerArr("y");
    }
    checkEquality();
}
function onStartButtonDown () {
  console.log('onstartbuttondown');
    turnNumber = 0;
    increaseTurnNumber();
}
function onStartButtonUp () {

}
function onStrictModeButtonDown () {
return "hi";
}
function onStrictModeButtonUp () {

}
function onResetButtonDown () {

}
function onResetButtonUp () {
  console.log('reset button up');
turnNumber = 0;
    increaseTurnNumber();
}
function increaseTurnNumber () {
  console.log('increase turn number:', turnNumber);
turnNumber = turnNumber + 1;
switch (turnNumber) {
    case 0: counter.destroy();
    counter = game.add.sprite(378, 435, '00');
    compsTurn();
    break;
    case 1: counter.destroy();
    counter = game.add.sprite(378, 435, '01');
    compsTurn();
    break;
    case 2: counter.destroy();
    counter = game.add.sprite(378, 435, '02');
    compsTurn();
    break;
    case 3: counter.destroy();
    counter = game.add.sprite(378, 435, '03');
    compsTurn();
    break;
    case 4: counter.destroy();
    counter = game.add.sprite(378, 435, '04');
    compsTurn();
    break;
    case 5: counter.destroy();
    counter = game.add.sprite(378, 435, '05');
    compsTurn();
    break;
    case 6: counter.destroy();
    counter = game.add.sprite(378, 435, '06');
    compsTurn();
    break;
    case 7: counter.destroy();
    counter = game.add.sprite(378, 435, '07');
    compsTurn();
    break;
    case 8: counter.destroy();
    counter = game.add.sprite(378, 435, '08');
    compsTurn();
    break;
    case 9: counter.destroy();
    counter = game.add.sprite(378, 435, '09');
    compsTurn();
    break;
    }
}
function getRandomNumber () {
    return Math.floor((Math.random() * 4) + 1);
}
function compsTurn () {
    //generates a num 1-4 and assigns it to compNum for later identification when pushing elements for the color rep'd by this num
    let compColor;
    myTurn = false;
    compNumber = getRandomNumber();
        switch (compNumber) {
        case 1: compColor = "g";
            pushToCompArr(compColor);
            setTimeout(function() {
                onGreenDown();
                onGreenUp(); }, 1000);
            break;
        case 2: compColor ="r";
            pushToCompArr(compColor);
            setTimeout(function() {
                onRedDown();
                onRedUp(); }, 1000);
            break;
        case 3: compColor ="y";
            pushToCompArr(compColor);
            setTimeout(function() {
                onYellowDown();
                onYellowUp(); }, 1000);
            break;
        case 4: compColor ="b";
            pushToCompArr(compColor);
            setTimeout(function() {
            onBlueDown();
            onBlueUp(); }, 1000);
            break;
    }
    alert("compsTurn ran");
    comp.moves.forEach(function(item) {
        switch (item) {
            case "r":
                setTimeout(function() {
                    onRedDown();
                    onRedUp();
                    myTurn = true;
                }, 1000);
                break;
            case "b":
                setTimeout(function() {
                    onBlueDown();
                    onBlueUp();
                    myTurn = true;
                }, 1000);
                break;
            case "y":
                setTimeout(function() {
                    onYellowDown();
                    onYellowUp();
                    myTurn = true;
                }, 1000);
                break;
            case "g":
                setTimeout(function() {
                    onGreenDown();
                    onGreenUp();
                    myTurn = true;
                }, 1000);
                break;
        }
    });
    console.log(comp.moves);
}
function pushToPlayerArr (color) {
    player.moves.push(color);
}

function checkEquality() {
  console.log('player.moves:', player.moves);
  console.log('comp.moves:', comp.moves);
  if (player.moves.length === comp.moves.length) {
    if (arraysAreEqual()) {
      // TODO: make simon play a longer pattern
    } else {
      console.log('game over');
    }
  }
}

// Returns whether the player array is equal to the computer array.
// Assumes the two arrays are the same length.
function arraysAreEqual () {
  return player.moves.every((el, i) => el === comp.moves[i]);
}
function pushToCompArr (color) {
  comp.moves.push(color);
}