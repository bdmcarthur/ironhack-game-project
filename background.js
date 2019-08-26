class Background {
    constructor (game){
        this.canvas = game.canvas;
        this.context = game.context;
        let width = canvas.width
        let height = canvas.height;
        this.x = 0;
        this.y = 0;
    }

    draw () {
        const image = new Image();
        image.src = 'images/city.png'

        if (image.complete) {
        
            context.drawImage(image, this.x, 0, image.width, image.height)

          } else {
            image.addEventListener('load',() => {
                context.drawImage(image, this.x, 0, image.width, image.height)
            });  
          }
    }
}