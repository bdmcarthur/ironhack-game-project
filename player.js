let count = 0;

class Player {
    constructor (game){
        this.canvas = game.canvas;
        this.context = game.context;
        let width = canvas.width
        let height = canvas.height;
        this.x = 70;
        this.y = 270;
        this.imageLink = 'images/sprite/Walk (1).png';
    }

    draw () {
        const image = new Image();
        image.src = this.imageLink;

        if (image.complete) {
            context.drawImage(image, this.x, this.y, image.width/4, image.height/4)
          } else {
            image.addEventListener('load',() => {
                context.drawImage(image, this.x, this.y, image.width/4, image.height/4)
            });  
          }
          count += 1
    }

    jump () {
        this.y -= 150;    
        setTimeout(() => {
            this.y += 150;
          }, 300);
    }

    throw () {

    }

    crashWith (arr) {
          for(let item of arr){
              if(item.x === 100 && this.y === 270){
                this.imageLink ='images/sprite/Dead (1).png'
                setTimeout(() => {
                     this.imageLink = 'images/sprite/Walk (1).png';
                  }, 200);
              }
          }
      }
}