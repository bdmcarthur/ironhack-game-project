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
        if(currentScore === 0){
            this.imageLink = 'images/sprite/Dead (15).png'
        }
      
        if(count === 0){
            this.imageLink = 'images/sprite/Walk (1).png'; 
        }
        else if(count === 15){
            this.imageLink = 'images/sprite/Walk (3).png';    
        }
        else if(count === 30){
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
        if(this.y !== 170){
        this.y -= 100;
        setTimeout(() => {
            this.y += 100;
            this.imageLink = 'images/sprite/Walk (1).png';;
          }, 700);
        }  
    }

    throw () {

    }

    crashWith (arr) {
          for(let item of arr){
              //
              if(item.x === 100 && this.y === 270){
                this.imageLink ='images/sprite/Dead (1).png'
                currentScore -= 20;
                setTimeout(() => {
                     this.imageLink = 'images/sprite/Walk (1).png';
                  }, 10);
              }
          }
      }
}