const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
var width = canvas.width;
var height = canvas.height;
const game = new Game(canvas);
const button = document.getElementById("start-button")
const intro = document.getElementById("game-intro")

// window.addEventListener('load', () => {
//   game.start();
//   });

  button.onclick = function() {
    intro.classList.add('hide')
    game.start();
  };

