class Player {
    constructor (game){
        this.canvas = game.canvas;
        this.context = game.context;
        let width = canvas.width
        let height = canvas.height;
        this.x = 70;
        this.y = 270;
    }

    draw () {
        const image = new Image();
        image.src = 'images/boy.svg'

        if (image.complete) {
            context.drawImage(image, this.x, this.y, image.width/1.25, image.height/1.25)
          } else {
            image.addEventListener('load',() => {
                context.drawImage(image, this.x, this.y, image.width/1.25, image.height/1.25)
            });  
          }
    }

    jump () {
        this.y -= 70;
        console.log('Jumped')
    }

    throw () {

    }
}