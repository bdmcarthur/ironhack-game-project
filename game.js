let frame = 0;
let level = 1;
let accel = 1;
let speed = 4 + accel;
let gameBeingPlayed = true;
let level1Complete = true;
let currentScore = 100;
let groundObstaclesArr = [];
var donutArr = [];
const SOUNDS = {
  background: "sounds/background.wav",
  hit: "sounds/hit.mp3",
  donut: "sounds/donut.mp3"
};

class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = this.canvas.getContext("2d");
    this.sound = new Sound();
    this.sound.loadSounds(SOUNDS, this);
    this.score = new Score(this);
    this.player = new Player(this);
    this.groundObstacles = new GroundObstacles(this);
    this.donut = new Donut(this);
    this.background = new Background(this);
    this.speed = 4;
    this.level = 1;
    this.callbacks = {
      jump: () => this.player.jump()
    };
    this.control = new Control(this.callbacks);
    this.control.setKeyBindings();
  }

  draw() {
    this.clear();
    this.background.draw();
    this.player.draw();
    this.score.draw();
  }

  start() {
    this.draw();
    this.loop();
  }

  clear() {
    const width = this.canvas.width;
    const height = this.canvas.height;
    this.context.clearRect(0, 0, width, height);
  }

  update() {
    this.groundObstacles.update();
    this.donut.update();
    this.player.crashWithObstacles(groundObstaclesArr);
    this.player.crashWithDonut(donutArr);
  }

  resetLevel() {
    frame = 0;
    groundObstaclesArr = [];
    groundObstaclesArr = [];
    this.background = new Background(this);
    this.player = new Player(this);
    tempSpriteCount = 0;
    tempDeadCount = 0;
    tempJumpCount = 0;
  }

  lose() {
    gameBeingPlayed = false;
    speed = 0;
    this.groundObstacles.imageLink = "images/sprite/rat3.png";
    gameover.style.display = "flex";
  }

  win() {
    if (level === 3) {
      winGame.style.display = "flex";
      gameBeingPlayed = false;
    } else {
      gameBeingPlayed = false;
      speed = 0;
      this.groundObstacles.imageLink = "images/sprite/rat3.png";
      levelDiv.style.display = "flex";
    }
  }

  loop() {
    this.sound.play("background", { volume: 0.2 });
    if (gameBeingPlayed === true) {
      if (currentScore === 0) {
        this.lose();
      }

      if (this.background.dx < -1155 && this.background.dx > -1210) {
        this.win();
      }

      frame += 1;
      this.draw();
      this.update();
      window.requestAnimationFrame(() => this.loop());
    }
  }
}
