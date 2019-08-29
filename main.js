const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
var width = canvas.width;
var height = canvas.height;
const game = new Game(canvas);
const startButton = document.getElementById("start-button")
const levelButton = document.getElementById("level-button")
const introDiv = document.getElementById("game-intro")
const levelDiv = document.getElementById("level")

// window.addEventListener('load', () => {
//   game.start();
//   });


  startButton.onclick = function() {
    introDiv.classList.add('hide')
    game.start();
  };

 levelButton.onclick = function() {
    levelDiv.style.display = "none";
    game.resetLevel()
    level += 1;
    accel += 1;
    speed = 4 + accel
    gameBeingPlayed = true;
    game.loop();
  };

