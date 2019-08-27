var trashArr = [];
var numCount = 0;
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

class Trash {
    constructor (game){
        this.canvas = game.canvas;
        this.context = game.context;
        let width = canvas.width
        let height = canvas.height;
        this.x = width;
        this.y = 340;
        this.vx = 3;    
    }

    draw () {
        const image = new Image();
        image.src = 'images/trashBag.png';

        if (image.complete) {
            context.drawImage(image, this.x, this.y, image.width/7, image.height/7)
          } else {
            image.addEventListener('load',() => {
                context.drawImage(image, this.x, this.y, image.width/7, image.height/7)
            });  
          }       
    }

    update (arr){
        if(numCount % 120 === 0 ){
            //&& getRandomInt(5) === 3
          this.trash = new Trash(this);
          trashArr.push(this.trash)
        }
        
        for(let item of trashArr){
          item.x -= this.vx;
          item.draw();
          }
          numCount += 1;
      }
}