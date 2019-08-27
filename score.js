let currentScore = 100;
class Score {
        constructor (game) {
          this.game = game;
        }
      
        draw () {
          const context = this.game.context;
          context.save();
          context.translate(750, 80);
          context.font = '45px verdana';
          context.fillStyle = 'white'
          context.fillRect(-20, -50, 220, 70);
          context.fillStyle = 'black'
          context.fillText(`Life ${ parseInt(currentScore) }`, 0, 0);
          context.restore();
        }
      
}