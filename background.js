class Background {
    constructor (game){
        this.canvas = game.canvas;
        this.context = game.context;
        let width = canvas.width
        let height = canvas.height;
        this.ax = 0;
        this.bx = 2210;
        this.cx = 2210*2;
        this.dx = 2210*3;
        this.images = {
            background: Object.assign(new Image(), { src: 'images/cityFinal.png' })
            }
        
    }

    draw () {
        let image;;
        image = this.images.background
        image.src = this.images.background.src
        let imgWidth = image.width;
        let imgHeight = image.height;

        if (image.complete) {
            context.drawImage(image, this.ax, 0, imgWidth, imgHeight)
            context.drawImage(image, this.bx, 0, imgWidth, imgHeight)
            context.drawImage(image, this.cx, 0, imgWidth, imgHeight)
            context.drawImage(image, this.dx, 0, imgWidth, imgHeight)
        } 
        else {
            image.addEventListener('load',() => {
            context.drawImage(image, this.ax, 0, imgWidth, imgHeight)
            context.drawImage(image, this.bx, 0, imgWidth, imgHeight)
            context.drawImage(image, this.cx, 0, imgWidth, imgHeight)
            context.drawImage(image, this.dx, 0, imgWidth, imgHeight)
        });     
    }
        this.update();
}

    update () {
        this.ax -= speed;
        this.bx -= speed;
        this.cx -= speed;
        this.dx -= speed;
    }



    

}
