class Score {
        constructor (game) {
          this.game = game;
          this.color = '#00FFFF'
        }
      
        draw () {
          const context = this.game.context;
          context.save();
          context.translate(750, 80);
          context.font = '45px Fredoka One';
          context.fillStyle = '#5c5756'
          context.beginPath();
          context.ellipse(80, -15, 56, 111, Math.PI / 2, 0, 2 * Math.PI);
          context.fill();
          context.fillStyle = 'white';
          context.fillText(`Life ${ parseInt(currentScore) }`, 0, 0);
          context.restore();
        }


}