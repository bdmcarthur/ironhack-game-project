class Score {
        constructor (game) {
          this.canvas = game.canvas;
          this.context = game.context;
          this.color = 'white'
          this.font = '45px Fredoka One';
        }
      
        draw () {
          context.save();
          context.translate(750, 80);
          context.font = this.font;
          context.fillStyle = '#5c5756'
          context.beginPath();
          context.ellipse(80, -15, 56, 111, Math.PI / 2, 0, 2 * Math.PI);
          context.fill();
          context.fillStyle = this.color;
          context.fillText(`Life ${ parseInt(currentScore) }`, 0, 0);
          context.restore();
        }


}