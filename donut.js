function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

class Donut {
    constructor (game){
        this.canvas = game.canvas;
        this.context = game.context;
        let width = canvas.width
        let height = canvas.height;
        this.x = width;
        this.y = 170;
        this.speed = level * speed; 
        this.imageTitle = 'images/donut.png' 
    }

    draw () {
        const image = new Image();
        image.src = this.imageTitle;

        if (image.complete) {
            context.drawImage(image, this.x, this.y)
        }
        else {
            image.addEventListener('load',() => {
                context.drawImage(image, this.x, this.y)
            });  
        }       
    }
    
    update (){   
        if(frame % 300 === 0){ 
            this.donut = new Donut(this);
            donutArr.push(this.donut)   
        }

        for(let item of donutArr){    
            item.x -= speed;
            item.draw();   
        }
    }
}