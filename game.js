class Game {
    constructor (canvas) {
        this.canvas = canvas;
        this.context = this.canvas.getContext('2d');
        this.player = new Player(this);
        this.background = new Background(this);
        this.callbacks = {
            jump: () => this.player.jump(),
            throw: () => this.player.throw()
          };
          this.control = new Control(this.callbacks);
          this.control.setKeyBindings();
          
    }

    draw () {
        this.clear()
        this.background.draw();
        this.player.draw(); 
    }

    start () {
        this.draw()
        this.move()
    }

    clear () {
        const width = this.canvas.width;
        const height = this.canvas.height;
        this.context.clearRect(0, 0, width, height); 
      }

      move () {
        setInterval(() => {
            this.draw();
            this.background.x -= 10
          }, 60)
      }
}