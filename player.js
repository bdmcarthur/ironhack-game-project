// let tempSpriteCount = 0;
// let tempDeadCount = 0;
// let tempJumpCount = 0;

// class Player {
//     constructor (game, score){
//         this.canvas = game.canvas;
//         this.context = game.context;
//         this.sound = game.sound;
//         let width = canvas.width
//         let height = canvas.height;
//         this.x = 70;
//         this.y = 270;
//         this.speed = speed;
//         this.images = {
//             dead: Object.assign(new Image(), { src: 'images/sprite/Dead (15).png' }),
//             dead2: Object.assign(new Image(), { src: 'images/sprite/Dead (5).png' }),
//             walk1: Object.assign(new Image(), { src: 'images/sprite/Walk (1).png' }),
//             walk3: Object.assign(new Image(), { src: 'images/sprite/Walk (3).png' }),
//             walk5: Object.assign(new Image(), { src: 'images/sprite/Walk (5).png' }),
//             jump: Object.assign(new Image(), { src: 'images/sprite/Jump (10).png' }),
//             }
        
//     }

//     draw () {
//         let image;;
//             image = this.images.background
//             image.src = this.images.background.src

//         if(currentScore <= 0){
//             image = this.images.dead
//             image.src = this.dead2.src
//         }
//         else {
//             if(this.imageLink === 'images/sprite/Jump (10).png'){
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

//         if (image.complete) {
//             context.drawImage(image, this.x, this.y, (image.width), image.height)
//           } else {
//             image.addEventListener('load',() => {
//                 context.drawImage(image, this.x, this.y, image.width, image.height)
//             });  
//           }
//         }

//     jump () {
//         if(this.y !== 170){
//             this.imageLink = 'images/sprite/Jump (10).png';
//             this.y -= 100;
//         }
//     }

//     crashWithObstacles (arr) {
        
//           for(let item of arr){   
//               if(item.x > 50 && item.x < 100 && this.y === 270 && currentScore >= 0){
//                 this.imageLink ='images/sprite/Dead (5).png'
//                 this.sound.play('hit', { volume: 0.5 })
//                     currentScore -= item.itemDamage;
//                     item.itemDamage = 0;        
//               }
//           }
//           this.draw()
//       }

//       crashWithDonut(arr) {
//         for(let item of arr){ 
//             if((item.y === 170 && item.x <140 && item.x>102) && this.y === 170){
//                   currentScore += 20;
//                   this.sound.play('donut', { volume: 0.5 })
//                   item.y = -200;  
//             }
//         }
//         this.draw();
//     }
// }







let tempSpriteCount = 0;
let tempDeadCount = 0;
let tempJumpCount = 0;

class Player {
    constructor (game, score){
        this.canvas = game.canvas;
        this.context = game.context;
        this.sound = game.sound;
        let width = canvas.width
        let height = canvas.height;
        this.x = 70;
        this.y = 270;
        this.yv = 10;
        this.speed = speed;
        this.imageLink = 'images/sprite/Walk (1).png'    
    }

    draw () {
        if(currentScore <= 0){
            this.imageLink = 'images/sprite/Dead (15).png'
        }
        else {
            if(this.imageLink === 'images/sprite/Jump (10).png'){
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
            else {
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
            context.drawImage(image, this.x, this.y, (image.width), image.height)
          } else {
            image.addEventListener('load',() => {
                context.drawImage(image, this.x, this.y, image.width, image.height)
            });  
          }
        }

    jump () {
        if(this.y !== 170){
            this.imageLink = 'images/sprite/Jump (10).png';
            this.y -= 100;
        }
    }

    crashWithObstacles (arr) {
        
          for(let item of arr){   
              if(item.x > 50 && item.x < 100 && this.y === 270 && currentScore >= 0){
                this.imageLink ='images/sprite/Dead (5).png'
                this.sound.play('hit', { volume: 0.5 })
                    currentScore -= item.itemDamage;
                    item.itemDamage = 0;        
              }
          }
          this.draw()
      }

      crashWithDonut(arr) {
        for(let item of arr){ 
            if((item.y === 170 && item.x <140 && item.x>102) && this.y === 170){
                  currentScore += 20;
                  this.sound.play('donut', { volume: 0.5 })
                  item.y = -200;  
            }
        }
        this.draw();
    }
}
