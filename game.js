class Game {
    constructor (canvas) {
        this.canvas = canvas;
        this.context = this.canvas.getContext('2d');
        this.player = new Player(this);
        this.background = new Background(this);
        this.trash = new Trash(this);
        this.callbacks = {
            jump: () => {
                this.player.jump();
                this.player.imageLink = 'images/sprite/Jump (6).png';
            }

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
         
            // if(this.background.x === 4618){}
            this.background.x -= 10
          }, 200)
      }
}