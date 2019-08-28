var groundObstaclesArr = [];
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

class GroundObstacles {
    constructor (game){
        this.canvas = game.canvas;
        this.context = game.context;
        let width = canvas.width
        let height = canvas.height;
        this.x = width;
        this.y = 320;
        this.vx = 3; 
        this.imageTitle = 'images/trashBag.png' 
        
    }

    draw () {
        const image = new Image();
        image.src = this.imageTitle;

        if (image.complete) {
            context.drawImage(image, this.x, this.y, image.width/19, image.height/21)
          } else {
            image.addEventListener('load',() => {
                context.drawImage(image, this.x, this.y, image.width/19, image.height/21)
            });  
          }       
    }
    // 
    update (arr){
        if(frame % 50 === 0 && getRandomInt(3) === 2){   

          if(getRandomInt(2) === 1){
          this.groundObstacles = new GroundObstacles(this);
          groundObstaclesArr.push(this.groundObstacles)
          this.groundObstacles.imageTitle = 'images/trashBag.png' 
          }

          else {
            this.groundObstacles = new GroundObstacles(this);
            groundObstaclesArr.push(this.groundObstacles)
            this.groundObstacles.imageTitle = 'images/rat1.png' 
            this.groundObstacles.y = 370;  
          }
        }
        
        for(let item of groundObstaclesArr){  
          if(frame % 150 === 0){
              if(item.imageTitle === 'images/rat1.png'){
                item.imageTitle = 'images/rat2.png'
              }
              else if (item.imageTitle === 'images/rat2.png'){
                item.imageTitle = 'images/rat1.png'
              }
          }

          if(item.imageTitle === 'images/rat2.png' || item.imageTitle === 'images/rat1.png'){
            item.x -= this.vx * 2;
            item.draw();
          }

          else {
            item.x -= this.vx;
            item.draw();
          }
        }
          this.draw()
      }
}