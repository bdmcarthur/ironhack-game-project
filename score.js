let currentScore = 100;
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
          context.fillStyle = '#00FFFF'
          context.beginPath();
          context.ellipse(80, -15, 60, 115, Math.PI / 2, 0, 2 * Math.PI);
          context.fill();
          context.beginPath();
          context.fillStyle = 'white'
          context.ellipse(80, -15, 56, 111, Math.PI / 2, 0, 2 * Math.PI);
          context.fill();
          context.fillStyle = '#00FFFF';
          context.fillText(`Life ${ parseInt(currentScore) }`, 0, 0);
          context.restore();
        }


}