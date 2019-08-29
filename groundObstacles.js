var groundObstaclesArr = [];
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

class GroundObstacles {
    constructor (game, speed){
        this.canvas = game.canvas;
        this.context = game.context;
        let width = canvas.width
        let height = canvas.height;
        this.x = width;
        this.y = 320;
        this.imageTitle = 'images/trashBagSet.png'
        this.itemDamage = 20; 
    }

    draw () {
        const image = new Image();
        image.src = this.imageTitle;

        if (image.complete) {
            context.drawImage(image, this.x, this.y, image.width, image.height)
          } else {
            image.addEventListener('load',() => {
                context.drawImage(image, this.x, this.y, image.width, image.height)
            });  
          }       
    }
    // 
    update (){
        if(frame % 30 === 0 && getRandomInt(3) ===1){   
            this.groundObstacles = new GroundObstacles(this);
            groundObstaclesArr.push(this.groundObstacles)
            this.groundObstacles.imageTitle = 'images/rat1.png' 
            this.groundObstacles.y = 370; 
        }

        else if(frame % 50 === 0 && getRandomInt(3) ===1) {
          this.groundObstacles = new GroundObstacles(this);
          groundObstaclesArr.push(this.groundObstacles)
          this.groundObstacles.imageTitle = 'images/trashBagSet.png' 
        }
        
        
        for(let item of groundObstaclesArr){  
          if(frame % 50 === 0){
              if(item.imageTitle === 'images/rat1.png'){
                item.imageTitle = 'images/rat2.png'
              }
              else if (item.imageTitle === 'images/rat2.png'){
                item.imageTitle = 'images/rat1.png'
              }
          }

          if(item.imageTitle === 'images/rat2.png' || item.imageTitle === 'images/rat1.png'){
            item.x -= speed * 2;
            item.draw();
          }

          else {
            item.x -= speed;
            item.draw();
          }
        }
         
      }
}