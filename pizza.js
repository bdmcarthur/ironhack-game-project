var pizzaArr = [];
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

class Pizza {
    constructor (game){
        this.canvas = game.canvas;
        this.context = game.context;
        let width = canvas.width
        let height = canvas.height;
        this.x = width;
        this.y = 170;
        this.speed = level * speed; 
        this.imageTitle = 'images/pizza.png' 
    }

    draw () {
        const image = new Image();
        image.src = this.imageTitle;

        if (image.complete) {
            context.drawImage(image, this.x, this.y, image.width/5, image.height/5)
          } else {
            image.addEventListener('load',() => {
                context.drawImage(image, this.x, this.y, image.width/5, image.height/5)
            });  
          }       
    }
    
    update (){
        
        if(frame % 300 === 0){ 
            this.pizza = new Pizza(this);
            pizzaArr.push(this.pizza)   
        }

        for(let item of pizzaArr){    
            item.x -= speed;
            item.draw();   
        }
      }
}