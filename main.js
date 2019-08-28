const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
var width = canvas.width;
var height = canvas.height;
const game = new Game(canvas);


// window.addEventListener('load', () => {
//   game.start();
//   });

  document.getElementById("start-button").onclick = function() {
    game.start();
  };

