let count = 0;

class Player {
    constructor (game){
        this.canvas = game.canvas;
        this.context = game.context;
        let width = canvas.width
        let height = canvas.height;
        // this.x = 70;
        // this.y = 270;
         this.x = 70;
        this.y = 270;
        this.imageLink = 'images/sprite/Walk (1).png';
        // this.imageLink = 'images/sprite/sprite-walk.png';
    }

    draw () {
        if(count === 0){
            this.imageLink = 'images/sprite/Walk (1).png'; 
        }
        else if(count === 4){
            this.imageLink = 'images/sprite/Walk (3).png';    
        }
        else if(count === 8){
            this.imageLink = 'images/sprite/Walk (5).png';
            count = 0;    
        }
        
        const image = new Image();
        image.src = this.imageLink;

        if (image.complete) {
            context.drawImage(image, this.x, this.y, (image.width/4), image.height/4)
          } else {
            image.addEventListener('load',() => {
                context.drawImage(image, this.x, this.y, image.width/4, image.height/4)
            });  
          }
          count += 1
        }

    jump () {
        this.y -= 100;
        setTimeout(() => {
            this.y += 100;
            this.imageLink = 'images/sprite/Walk (1).png';;
          }, 600);
    }

    throw () {

    }

    crashWith (arr) {
          for(let item of arr){
              //
              if((item.x === 60 || item.x === 110) && this.y === 270){
                this.imageLink ='images/sprite/Dead (1).png'
                setTimeout(() => {
                     this.imageLink = 'images/sprite/Walk (1).png';
                  }, 200);
              }
          }
      }
}