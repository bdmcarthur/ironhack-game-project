let backgroundArr = [];
class Background {
    constructor (game){
        this.canvas = game.canvas;
        this.context = game.context;
        let width = canvas.width
        let height = canvas.height;
        this.x = 0;
        this.y = 0;
        this.xPos = 0;
    }

    draw () {   
        const image = new Image();
        image.src = 'images/cityBack.png'
        let imgWidth = image.width/8;
        let imgHeight = image.height/8;
        if (image.complete) {
            context.drawImage(image, this.x, 0, imgWidth, imgHeight)

          } else {
            image.addEventListener('load',() => {
                context.drawImage(image, this.x, 0, imgWidth, imgHeight)
            });  
          }
    }

    update (){
        if(backgroundArr[backgroundArr.length-1].x  === -1200){
            this.background = new Background(this);
            backgroundArr.push(this.background);
            backgroundArr[backgroundArr.length-1].x = 0;
 
        }

        for(let item of backgroundArr){
            this.xPos = item.x
            item.x -= 1;
            item.draw();

            
            }
    }

}