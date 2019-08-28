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
        this.score.draw();
    }

    deadPlayer (){
        this.player.draw(); 
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
        this.player.imageLink = 'images/sprite/Dead (15).png';
        // this.deadPlayer();
        currentScore = 100;
    
    }
    
    loop () {
        if(currentScore <= 0){
            this.reset();
        }
        this.player.crashWith(groundObstaclesArr);
        this.draw();
        this.groundObstacles.update();
        this.background.ax -= 2;
        this.background.bx -= 2;
        this.background.cx -= 2;
        this.background.dx -= 2;
        frame += 13
        window.requestAnimationFrame(() => this.loop());
    }

}
