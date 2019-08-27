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
        
        this.move = setInterval(() => {
        if(currentScore <= 0){
            this.reset();
        }
            else{
                this.player.crashWith(groundObstaclesArr);
                this.draw();
                this.groundObstacles.update();
                this.background.ax -= 1;
                this.background.bx -= 1;
                this.background.cx -= 1;
                this.background.dx -= 1;
                frame += 1;
            }  
        }, 8)
      
          
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
      
    }

    clear () {
        const width = this.canvas.width;
        const height = this.canvas.height;
        this.context.clearRect(0, 0, width, height); 
      }

    reset () {
        clearInterval(this.move);
        this.player.imageLink = 'images/sprite/Dead (15).png'
        currentScore = 100;
    
    }  

}