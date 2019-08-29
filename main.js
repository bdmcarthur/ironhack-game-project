const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
var width = canvas.width;
var height = canvas.height;
const game = new Game(canvas);
const startButton = document.getElementById("start-button")
const levelButton = document.getElementById("level-button")
const gameoverButton = document.getElementById("gameover-button")
const introDiv = document.getElementById("game-intro")
const levelDiv = document.getElementById("level")
const gameOver = document.getElementById("gameover")
const winGame = document.getElementById("win-game")

  startButton.addEventListener('click',() => {
    introDiv.classList.add('hide')
    game.start();
  });  

  levelButton.addEventListener('click',() => {
    levelDiv.style.display = "none";
    game.resetLevel()
    level += 1;
    accel += 1;
    speed = 4 + accel
    gameBeingPlayed = true;
    game.loop();
  });  

  gameoverButton.addEventListener('click',() => {
    gameover.style.display = "none";
    game.resetLevel()
    level = 1;
    accel = 1;
    speed = 4; 
    gameBeingPlayed = true; 
    game.loop();
  });  