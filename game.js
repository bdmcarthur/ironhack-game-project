let frame = 0;
let level = 1;
let accel = 1;
let speed = 3 + accel;
let gameBeingPlayed = true;
let level1Complete = true;
const SOUNDS = {
    background: "sounds/background.wav",
    hit: "sounds/hit.mp3",
    pizza: "sounds/pizza.mp3"
  };


class Game {
    constructor (canvas) {
        this.canvas = canvas;
        this.context = this.canvas.getContext('2d');
        this.sound = new Sound();
        this.sound.loadSounds(SOUNDS, this);
        this.player = new Player(this);
        this.groundObstacles = new GroundObstacles(this, speed);
        this.pizza = new Pizza(this);
        this.score = new Score(this);
        this.background = new Background(this);
        this.speed = 4;
        this.level = 1;
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
        this.pizza.update();
        this.player.crashWithObstacles(groundObstaclesArr);
        this.player.crashWithPizza(pizzaArr);
    } 

    resetLevel() {
        frame = 0;
        currentScore = 100;  
        groundObstaclesArr = [];
        groundObstaclesArr = [];
        this.background = new Background(this);
        this.player = new Player(this);
        tempSpriteCount = 0;
        tempDeadCount = 0;
        tempJumpCount = 0;   
    }

    lose () {
        gameBeingPlayed = false;
        speed = 0;
        this.player.imageLink = 'images/sprite/Idle (14).png';
        this.groundObstacles.imageLink = 'images/sprite/rat3.png';
        gameover.style.display = "flex"; 
    }

    win () {
        if(level === 3){
        winGame.style.display = "block";    
        }
        else{
        gameBeingPlayed = false;
        speed = 0;
        this.player.imageLink = 'images/sprite/Idle (14).png';
        this.groundObstacles.imageLink = 'images/sprite/rat3.png';
        levelDiv.style.display = "flex";
        }
    }
    
    loop () {
        this.sound.play('background', { volume: 0.2 })
        if(gameBeingPlayed === true){
        if(currentScore === 0){
            this.lose();     
        }

        if(this.background.dx < -1155 && this.background.dx > -1210){
            this.win();     
        }
        frame += 1;
        this.draw();
        this.update();
        window.requestAnimationFrame(() => this.loop());
    }
    }

}
