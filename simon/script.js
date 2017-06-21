var game = new Phaser.Game(800, 800, Phaser.CANVAS, '', { preload: preload, create: create, update: update });
let turnNumber = 0;
let greenButton; 
let redButton; 
let blueButton; 
let yellowButton;
let blueAudio;
let greenAudio;
let yellowAudio;
let redAudio;
var counter;

let moves = {};

//holds player's moves
moves.playerMoves = []; 

//holds computer's moves
moves.compMoves = [];

//if player and computer positions are equivalent, increment the turn number
moves.checkEquality = function(num, num2) {
    num = moves.playerMoves[turnNumber];
    num2 = moves.compMoves[turnNumber];
    if(num === num2) {
        turnNumber++;
        updateTurnNum();
    }
};
var counter;
let startButton;
let leftButton;
let rightButton; 
let playerTurn = false;
function preload () {
    game.load.image('bg', 'assets/bgLayer.png');
    game.load.image('redButton', 'assets/redLayer.png');
    game.load.image('yellowButton', 'assets/yellowLayer.png');
    game.load.image('blueButton', 'assets/blueLayer.png');
    game.load.image('greenButton', 'assets/greenLayer.png');
    game.load.image('layer2', 'assets/Layer-2.png');
    game.load.image('leftBtn', 'assets/leftButton.png');
    game.load.image('rightBtn', 'assets/rightButton.png');
    game.load.image('ctrGnBtn', 'assets/centerGreenButton.png');
    game.load.image('ctrRdBtn', 'assets/centerRedButton.png');    
    game.load.image('num0', 'assets/num0.png');
    game.load.image('num1', 'assets/num1.png');
    game.load.image('num2', 'assets/num2.png');
    game.load.image('num3', 'assets/num3.png');
    game.load.image('num4', 'assets/num4.png');
    game.load.image('num5', 'assets/num5.png');
    game.load.image('num6', 'assets/num6.png');
    game.load.image('num7', 'assets/num7.png');
    game.load.image('num8', 'assets/num8.png');
    game.load.image('num9', 'assets/num9.png');    
    game.load.audio('gsfx', ['audio/green.mp3', 'audio/green.ogg']);
    game.load.audio('rsfx', ['audio/red.mp3', 'audio/red.ogg']);
    game.load.audio('ysfx', ['audio/yellow.mp3', 'audio/yellow.ogg']);
    game.load.audio('bsfx', ['audio/blue.mp3', 'audio/blue.ogg']);
}
function create () {
    game.add.tileSprite(0, 0, 800, 800, 'bg');
    game.add.image(257, 258, 'layer2');
    counter = game.add.image(378, 435, 'num0');
    
    blueButton = game.add.button(412, 412, 'blueButton', blueButtonClk);
    blueButton.onInputOut.add(onBUp);
    greenButton = game.add.button(28, 31, 'greenButton', greenButtonClk);
    greenButton.onInputOut.add(onGUp);
    redButton = game.add.button(412, 31, 'redButton', redButtonClk);
    redButton.onInputOut.add(onRUp);
    yellowButton = game.add.button(28, 412, 'yellowButton', yellowButtonClk);
    yellowButton.onInputOut.add(onYUp);
    
    blueButton.inputEnabled = true; 
    greenButton.inputEnabled = true; 
    redButton.inputEnabled = true; 
    yellowButton.inputEnabled = true; 

    greenAudio = game.add.audio('gsfx');
    redAudio = game.add.audio('rsfx');
    yellowAudio = game.add.audio('ysfx');
    blueAudio = game.add.audio('bsfx');
    
    startButton = game.add.button(385, 500, 'ctrGnBtn', startBtnClick);
    leftButton = game.add.button(455, 500, 'leftBtn', leftBtnClick);
    rightButton = game.add.button(315, 500, 'rightBtn', rightBtnClick);
    startButton.inputEnabled = true;
    leftButton.inputEnabled = true;
    rightButton.inputEnabled = true;
}
function update () {

}
function startBtnClick() {
reset();
playerTurn = false;
compsTurn();
}
function reset() {
turnNumber = 0;
    for(var i = 0; i < moves.playerMoves.length; i++) {
        moves.playerMoves[i] = "";
    }
    for(var j = 0; j < moves.compMoves.length; j++) {
        moves.compMoves[i] = "";
    }
}
function compsTurn() {
let compColor = getRandomNum();
    switch(compColor) {
        case 1: setTimeout(greenButtonClk, 500);
                setTimeout(onGUp, 1000);
                break;
        case 2: setTimeout(redButtonClk, 500);
                setTimeout(onRUp, 1000);
                break;
        case 3: setTimeout(yellowButtonClk, 500);
                setTimeout(onYUp, 1000);
                break;
        case 4: setTimeout(blueButtonClk, 500);
                setTimeout(onBUp, 1000);
                break;
    }
    turnNumber = turnNumber + 1;
    updateTurnNum();
    playerTurn = true;
    playersTurn();
}
function playersTurn() {
    blueButton.inputEnabled = true;
    redButton.inputEnabled = true;
    greenButton.inputEnabled = true;
    yellowButton.inputEnabled = true;
    
    compsTurn();
    playTheNotes();    
}

function greenButtonClk() {
    greenAudio.play();
    greenButton.alpha = 0.3;
    moves.compMoves.push('g');
    console.log(moves.compMoves);
}
function blueButtonClk() { 
    blueAudio.play();
    blueButton.alpha = 0.3;
    moves.compMoves.push('b');
}
function yellowButtonClk() {
    yellowAudio.play();
    yellowButton.alpha = 0.3; 
    moves.compMoves.push('y');
}
function redButtonClk() {
    redAudio.play();
    redButton.alpha = 0.3;
    moves.compMoves.push('r');
}
function onGUp() {
    greenButton.alpha = 1;
}
function onBUp() {
    blueButton.alpha = 1;
}
function onYUp() {
    yellowButton.alpha = 1;
}
function onRUp() {
    redButton.alpha = 1;
}
function getRandomNum() {
    return Math.floor(Math.random() * 4) + 1;
}
function disableInput() {
    blueButton.inputEnabled = false;
    redButton.inputEnabled = false;
    greenButton.inputEnabled = false;
    yellowButton.inputEnabled = false;
}
function leftBtnClick(){}
function rightBtnClick(){}
function updateTurnNum() {
    switch(turnNumber) {
        case 0: counter = game.add.image(378, 435, 'num0');
            break;
        case 1: counter = game.add.image(378, 435, 'num1');
            break;
        case 2: counter = game.add.image(378, 435, 'num2');
            break;
        case 3: counter = game.add.image(378, 435, 'num3');
            break;
        case 4: counter = game.add.image(378, 435, 'num4');
            break;
        case 5: counter = game.add.image(378, 435, 'num5');
            break;
        case 6: counter = game.add.image(378, 435, 'num6');
            break;
        case 7: counter = game.add.image(378, 435, 'num7');
            break;
        case 8: counter = game.add.image(378, 435, 'num8');
            break;
        case 9: counter = game.add.image(378, 435, 'num9');
            break;
    }
}
function playTheNotes() {
    for (var i = 0; i < moves.compMoves.length; i++) {
        switch(moves.compMoves[i]) {
            case "r": setDuration();
                redAudio.play();
                redButton.alpha = 0.3;
                break;
            case "b": setDuration();
                blueAudio.play(); 
                blueButton.alpha = 0.3;
                break;
            case "g": setDuration();
                greenAudio.play(); 
                greenButton.alpha = 0.3;
                break;
            case "y": setDuration();
                yellowAudio.play(); 
                yellowButton.alpha = 0.3;
                break;
        }
    }
    var prevpos = turnNumber - 1;
    moves.checkEquality(turnNumber, prevpos);
}
function setDuration() {
    setTimeout(setDuration, 50);
}