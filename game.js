var frame = 0;
class Game {
    constructor (canvas) {
        this.canvas = canvas;
        this.context = this.canvas.getContext('2d');
        this.player = new Player(this);
        this.trash = new Trash(this);
        this.rat = new Rat(this);
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
        this.rat.update(ratsArr);
    }

    start () {
        this.draw()
        this.update()
    }

    clear () {
        const width = this.canvas.width;
        const height = this.canvas.height;
        this.context.clearRect(0, 0, width, height); 
      }

      update () {
        setInterval(() => {
            this.player.crashWith(trashArr);
            this.draw();
            
            this.trash.update();
            this.background.ax -= 1;
            this.background.bx -= 1;
            this.background.cx -= 1;
            this.background.dx -= 1;
            frame += 1;
            
          }, 8)
      }

}