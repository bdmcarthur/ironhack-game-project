let currentScore = 100;
class Score {
        constructor (game) {
          this.game = game;
        }
      
        draw () {
          const context = this.game.context;
          context.save();
          context.translate(750, 80);
          context.font = '45px Fredoka One';
          context.fillStyle = '#F0FAFA'
          context.beginPath();
          context.ellipse(80, -15, 50, 125, Math.PI / 2, 0, 2 * Math.PI);
          context.fill();
          // context.fillRect(-20, -50, 220, 70);
          context.fillStyle = '#00FFFF'
          context.fillText(`Life ${ parseInt(currentScore) }`, 0, 0);
          context.restore();
        }


}