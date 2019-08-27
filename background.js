class Background {
    constructor (game){
        this.canvas = game.canvas;
        this.context = game.context;
        let width = canvas.width
        let height = canvas.height;
        this.ax = 0;
        this.bx = 2024;
        this.cx = 4048;
        this.dx = 6072;
    }

    draw () {   
        const image = new Image();
        image.src = 'images/cityBack.png'
        let imgWidth = image.width/8;
        let imgHeight = image.height/8;

        if (image.complete) {
            context.drawImage(image, this.ax, 0, imgWidth, imgHeight)
            context.drawImage(image, this.bx, 0, imgWidth, imgHeight)
            context.drawImage(image, this.cx, 0, imgWidth, imgHeight)
            context.drawImage(image, this.dx, 0, imgWidth, imgHeight)
          } else {
            image.addEventListener('load',() => {
                context.drawImage(image, this.ax, 0, imgWidth, imgHeight)
                context.drawImage(image, this.bx, 0, imgWidth, imgHeight)
                context.drawImage(image, this.cx, 0, imgWidth, imgHeight)
                context.drawImage(image, this.dx, 0, imgWidth, imgHeight)
            });  
          }      
        }

}

