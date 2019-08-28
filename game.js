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
          this.animationID     
    }

    draw () {
        this.clear();
        this.background.draw()
        this.player.draw();
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

    update () {
        this.groundObstacles.update();
        this.player.crashWith(groundObstaclesArr);
    } 

    reset () {
        currentScore = 100;
        frame = 0;
        obstaclesArr = [];
    }

    lose () {
        if(currentScore <= 0){
            this.reset();
        }
    }
    
    loop () {
        frame += 1;
        this.draw();
        this.update();
        window.requestAnimationFrame(() => this.loop());
    }

}
