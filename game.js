var frame = 0;
class Game {
    constructor (canvas) {
        this.canvas = canvas;
        this.context = this.canvas.getContext('2d');
        this.player = new Player(this);
        this.groundObstacles = new GroundObstacles(this);
        this.score = new Score(this);
        this.background = new Background(this);
        this.callbacks = {
            jump: () => this.player.jump(),
            throw: () => this.player.throw()
          };
          this.control = new Control(this.callbacks);
          this.control.setKeyBindings();       
    }

    draw () {
        this.clear();
        this.background.draw()
        this.player.draw();
        this.groundObstacles.update();
        this.player.crashWith(groundObstaclesArr);
        this.score.draw();
    }

    start () {
        this.draw()
        this.loop()
    }

    clear () {
        const width = this.canvas.width;
        const height = this.canvas.height;
        this.context.clearRect(0, 0, width, height); 
      }

    reset () {
        window.cancelAnimationFrame(loop)
        currentScore = 100;
        frame = 0;
    }
    
    loop () {
        if(currentScore <= 0){
            this.draw();
            this.reset();
        }
        this.draw();
        frame += 1
        window.requestAnimationFrame(() => this.loop());
    }

}
