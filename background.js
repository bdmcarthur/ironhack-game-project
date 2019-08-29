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
        this.imageLink = 'images/cityFinal.svg'
    }

    draw () {
        const image = new Image();
        image.src = this.imageLink;
        let imgWidth = image.width/3.3;
        let imgHeight = image.height/3.3;

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

