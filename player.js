let tempSpriteCount = 0;
let tempDeadCount = 0;
let tempJumpCount = 0;

class Player {
    constructor (game){
        this.canvas = game.canvas;
        this.context = game.context;
        let width = canvas.width
        let height = canvas.height;
        // this.x = 70;
        // this.y = 270;
        this.x = 70;
        this.y = 270;
        this.speed = 6;
        this.imageLink = 'images/sprite/Walk (1).png'
    }

    draw () {
        if(currentScore <= 0){
            this.imageLink = 'images/sprite/Dead (15).png'
        }

        else {
            if(this.imageLink === 'images/sprite/Jump (7).png'){
                tempJumpCount += 1;   
                if(tempJumpCount >= 50){
                    this.y += 100;
                    this.imageLink = 'images/sprite/Walk (1).png';
                    tempJumpCount = 0;  
                }
            }
            else if(this.imageLink === 'images/sprite/Dead (5).png'){
                tempDeadCount += 1;  
                if(tempDeadCount >= 20){
                    this.imageLink = 'images/sprite/Walk (1).png';
                    tempDeadCount = 0;  
                }
            }
            else if (this.imageLink !== 'images/sprite/Idle (14).png') {
                if(tempSpriteCount=== 0){
                    this.imageLink = 'images/sprite/Walk (1).png'; 
                }
                else if(tempSpriteCount === 16){
                    this.imageLink = 'images/sprite/Walk (3).png';    
                }
                else if(tempSpriteCount === 32){
                    this.imageLink = 'images/sprite/Walk (5).png';
                    tempSpriteCount = 0;    
                }
                tempSpriteCount += 1;
            }
        }

        const image = new Image();
        image.src = this.imageLink;

        if (image.complete) {
            context.drawImage(image, this.x, this.y, (image.width/4), image.height/4)
          } else {
            image.addEventListener('load',() => {
                context.drawImage(image, this.x, this.y, image.width/4, image.height/4)
            });  
          }
        }

    jump () {
        if(this.y !== 170){
            this.imageLink = 'images/sprite/Jump (7).png';
            this.y -= 100;
        }  
    }

    // throw () {

    // }

    crashWith (arr) {
          for(let item of arr){
              if(item.x === 100 && this.y === 270 && currentScore > 0){
                this.imageLink ='images/sprite/Dead (5).png'
                currentScore -= 20;
              }
          }
          this.draw()
      }

}





// let tempSpriteCount = 0;
// let tempDeadCount = 0;
// let tempJumpCount = 0;

// class Player {
//     constructor (game){
//         this.canvas = game.canvas;
//         this.context = game.context;
//         let width = canvas.width
//         let height = canvas.height;
//         // this.x = 70;
//         // this.y = 270;
//         this.x = 70;
//         this.y = 270;
//         this.speed = 6;
//         this.imageLink = 'images/sprite/Walk (1).png'
//         // this.images = {
//           //  dead: new Image()
//         // }:
//         // this.images.dead.src = 'images/sprite/Dead (15).png';
//         // this.images = {
//         //     dead: Object.assign(new Image(), { src: 'images/sprite/Dead (15).png' }),
//         //     dead: Object.assign(new Image(), { src: 'images/sprite/Dead (15).png' }),
//         //     dead: Object.assign(new Image(), { src: 'images/sprite/Dead (15).png' }),
//         //     dead: Object.assign(new Image(), { src: 'images/sprite/Dead (15).png' }),
//         //     dead: Object.assign(new Image(), { src: 'images/sprite/Dead (15).png' }),
//         //     dead: Object.assign(new Image(), { src: 'images/sprite/Dead (15).png' }),
//         // }
//     }

//     draw () {
//         // let image;
//         if(currentScore <= 0){
//             // image = this.images.dead;
//             this.imageLink = 'images/sprite/Dead (15).png'
//         }

//         else {
//             if(this.imageLink === 'images/sprite/Jump (7).png'){
//                 tempJumpCount += 1;   
//                 if(tempJumpCount >= 50){
//                     this.y += 100;
//                     this.imageLink = 'images/sprite/Walk (1).png';
//                     tempJumpCount = 0;  
//                 }
//             }
//             else if(this.imageLink === 'images/sprite/Dead (5).png'){
//                 tempDeadCount += 1;  
//                 if(tempDeadCount >= 20){
//                     this.imageLink = 'images/sprite/Walk (1).png';
//                     tempDeadCount = 0;  
//                 }
//             }
//             else if (this.imageLink !== 'images/sprite/Idle (14).png') {
//                 if(tempSpriteCount=== 0){
//                     this.imageLink = 'images/sprite/Walk (1).png'; 
//                 }
//                 else if(tempSpriteCount === 16){
//                     this.imageLink = 'images/sprite/Walk (3).png';    
//                 }
//                 else if(tempSpriteCount === 32){
//                     this.imageLink = 'images/sprite/Walk (5).png';
//                     tempSpriteCount = 0;    
//                 }
//                 tempSpriteCount += 1;
//             }
//         }

//         const image = new Image();
//         image.src = this.imageLink;

//         if (image.complete) {
//             context.drawImage(image, this.x, this.y, (image.width/4), image.height/4)
//           } else {
//             image.addEventListener('load',() => {
//                 context.drawImage(image, this.x, this.y, image.width/4, image.height/4)
//             });  
//           }
//         }

//     jump () {
//         if(this.y !== 170){
//             this.imageLink = 'images/sprite/Jump (7).png';
//             this.y -= 100;
//         }  
//     }

//     // throw () {

//     // }

//     crashWith (arr) {
//           for(let item of arr){
//               if(item.x === 100 && this.y === 270 && currentScore > 0){
//                 this.imageLink ='images/sprite/Dead (5).png'
//                 currentScore -= 20;
//               }
//           }
//           this.draw()
//       }

// }