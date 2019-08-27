var ratsArr = [];
var numCount = 0;
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

class Rat{
    constructor (game){
        this.canvas = game.canvas;
        this.context = game.context;
        let width = canvas.width
        let height = canvas.height;
        this.x = width;
        this.y = 375;
        this.vx = 1;    
    }

    draw () {
        const image = new Image();
        image.src = 'images/rat1.png';
        let imgWidth = image.width/8;
        let imgHeight = image.height/8;

        if (image.complete) {
            context.drawImage(image, this.x, this.y, imgWidth, imgHeight)
          } else {
            image.addEventListener('load',() => {
                context.drawImage(image, this.x, this.y, imgWidth, imgHeight)
            });  
          }       
    }

    update (arr){
        if(numCount === -1){   
          this.rat = new Rat(this);
          ratsArr.push(this.rat)
        }
        
        for(let item of ratsArr){
          item.x -= this.vx;
          item.draw();
          }
          numCount += 1;
      }
}