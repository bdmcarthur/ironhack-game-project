let spriteCount = 0;
let tempDeadCount = 0;

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
        if(currentScore <= 0){
            this.imageLink = 'images/sprite/Dead (15).png'
        }

        else {
            if(this.imageLink === 'images/sprite/Dead (5).png'){
                tempDeadCount += 1;  
                if(tempDeadCount >= 20){
                    this.imageLink = 'images/sprite/Walk (1).png';
                    tempDeadCount = 0;
                      
                }
            }

            else {
                console.log(spriteCount)
                if(spriteCount === 0){
                    this.imageLink = 'images/sprite/Walk (1).png'; 
                }
                else if(spriteCount === 16){
                    this.imageLink = 'images/sprite/Walk (3).png';    
                }
                else if(spriteCount === 32){
                    this.imageLink = 'images/sprite/Walk (5).png';
                    spriteCount = 0;    
                }
                spriteCount += 1;
            }
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
        }

    jump () {
        if(this.y !== 170){
            this.imageLink = 'images/sprite/Jump (5).png';
        this.y -= 100;
        
        setTimeout(() => {
            this.y += 100;
            this.imageLink = 'images/sprite/Walk (1).png';
          }, 700);
        }  
    }

    throw () {

    }

    crashWith (arr) {
          for(let item of arr){
              if(item.x === 100 && this.y === 270){
                this.imageLink ='images/sprite/Dead (5).png'
                currentScore -= 25;
              }
          }
          this.draw()
      }
}