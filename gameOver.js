class GameOver{
        constructor (game) {
          this.canvas = game.canvas;
          this.context = game.context;
          let width = canvas.width;
          let height = canvas.height;
        }
      
        draw () {
          context.fillStyle = 'white'
          context.fillRect(0, 0, 1000, 500);
          
        }
      
}