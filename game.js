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

    // reset () {
    //     currentScore = 100;
    //     frame = 0;
    //     obstaclesArr = [];
    // }

    lose () {
        this.background.speed = 0;
        this.groundObstacles.speed = 0;
    }

    win () {
        this.player.x += this.player.speed;
        this.background.speed = 0;
        this.groundObstacles.speed = 0;    
        setTimeout(() => {
            this.player.speed = 0;
            this.player.imageLink = 'images/sprite/Idle (14).png';
            this.groundObstacles.imageLink = 'images/sprite/rat1.png';
        }, 800);        
    }
    
    loop () {
        console.log(this.background.dx)
        if(currentScore <= 0){
            this.lose();
        }
        if(this.background.dx === -1202){
            this.win();
        }
        frame += 1;
        this.draw();
        this.update();
        window.requestAnimationFrame(() => this.loop());
    }

}
