var myCanvas = document.getElementById('the-canvas');
var ctx = myCanvas.getContext('2d');
var currentGame;
var playerImage;
var tracksImage;
var imgData = [];

function Game(){
    this.player ={};
    this.wall = {}
    console.log("This game exists");
}

function Walls(){
    this.x=0;
    this.y=0;
    this.width=0;
    this.height=0;
    this.matrix = [
        [ 1, 9, 1, 1, 1, 1, 1, 1, 1, 1 ],
        [ 1, 0, 0, 0, 1, 1, 0, 0, 0, 1 ],
        [ 1, 1, 1, 0, 0, 1, 0, 1, 0, 1 ],
        [ 1, 1, 1, 1, 0, 0, 0, 1, 0, 1 ],
        [ 1, 0, 0, 0, 1, 1, 1, 1, 0, 1 ],
        [ 1, 0, 1, 0, 0, 0, 0, 0, 0, 1 ],
        [ 1, 0, 1, 1, 1, 1, 1, 1, 1, 1 ],
        [ 1, 0, 1, 0, 0, 1, 0, 1, 1, 1 ],
        [ 1, 0, 0, 0, 1, 1, 0, 0, 0, 1 ],
        [ 1, 8, 1, 1, 1, 1, 1, 1, 1, 1 ]
        ];
}

Walls.prototype.drawWalls = function() {
    for (j = 0; j < this.matrix.length; j++) {
      for (i = 0; i < this.matrix.length; i++) {
        if (this.matrix[i][j] == 1) {
          this.x = j * 50;
          this.y = i * 50;
          this.width = 50;
          this.height = 50;
          ctx.fillRect(this.x, this.y, this.width, this.height);
        }
      }
    }
  }

function Player(){
    //img (array of position sprites)
    //counter or lives?
    //speed?
    this.x=293;
    this.y=648;
    this.width=30;
    this.height=30;
    this.img='images/dragonthing.png';
    //https://gamedevelopment.tutsplus.com/tutorials/an-introduction-to-spritesheet-animation--gamedev-13099
    this.tracks='images/trackscpb.png';
    this.movesLeft=1000;
    this.speed=3;
    console.log("This player exists")
}

Player.prototype.drawPlayer = function (){
    that = this;
    playerImage = new Image();
    this.matrix = currentGame.matrix;
    playerImage.src = that.img;
    playerImage.onload = function(){
    ctx.drawImage(playerImage, that.x, that.y, that.width, that.height)
    }
}
Player.prototype.canIMove = function(futurex, futurey) {
    var canmove = true;
    for (j = 0; j < myWalls.matrix.length; j++) {
        for (i = 0; i < myWalls.matrix.length; i++) {
            if (myWalls.matrix[i][j] == 1) {
                myWalls.x = j*50;
                myWalls.y = i*50;
                myWalls.width = 50;
                myWalls.height = 50;
            }
            if ( 
                futurex + this.width >= myWalls.x &&
                futurex <= myWalls.x + myWalls.width &&
                futurey + this.height >= myWalls.y &&
                futurey <= myWalls.y + myWalls.height
            ) {
                canmove = false;
            } else if (
                futurex + this.width >= 700 ||
                futurex <= 0 ||
                futurey + this.height >= 700 ||
                futurey <= 0
            ) {
                canmove = false;
            }
        }
    }
    return canmove;
}

// Player.prototype.canIMove (){

// }
////trying to create path behind player...
// Player.prototype.drawTracks = function () {
//     that=this;
//     tracksImage = new Image();
//     tracksImage.src=that.tracks;
//     tracksImage.onload=function(){
//     ctx.drawImage(tracksImage, that.x, that.y, that.width, that.height)
//     }
//     console.log("trying to draw tracks")
// }
Player.prototype.move = function(whichKey){
////erases old player location
    ctx.clearRect(this.x, this.y, this.width, this.height);
    switch(whichKey){
        case 'ArrowLeft':
            if (this.canIMove(this.x-this.speed, this.y)){
                this.x -=this.speed;
            }
            break;
        case 'ArrowRight':
            if(this.canIMove(this.x+this.speed, this.y)){
                this.x +=this.speed;
            }
            break;
        case 'ArrowUp':
            if(this.canIMove(this.x, this.y-this.speed)){
            this.y -=this.speed;
            }
            break;
        case 'ArrowDown':
            if(this.canIMove(this.x, this.y+this.speed)){
            this.y +=this.speed;
        }
    }
//draws image at new location
    ctx.drawImage(playerImage, this.x, this.y, this.width, this.height);
};
// Player.prototype.checkCollision=function(futurex, futurey){
// if
    // (futurex + this.width >=currentGame.)


         // Tried getting the data on the pixels that will be covered by player if player moves.
         //However got an error image tainted so did this differently instead.
         //will need this approach if change to maze as an img instead of drawing rectangles
        // var imgData = ctx.getImageData(this.x, this.y, this.width, this.height).data;
        //if pixel is back don't move.  
// }
// console.log(ctx.getImageData(this.x, this.y, 100, 100));
// Player.prototype.collisionCheck=function(){
//     imgData = ctx.getImageData(this.x, this.y, 100, 100);
//         console.log(imgData);
//         // imgData.setAttribute('crossOrigin', '');
//         // imgData.crossOrigin= "Anonymous";
// }

function PowerUps(){
    //array of food imgs?
}
//constructor function wall

//constructor function power up

// constructor function predators


document.getElementById("start-button").onclick = function (){
currentGame = new Game();
myPlayer = new Player ();
myWalls = new Walls();
currentGame.player = myPlayer;
currentGame.walls = myWalls;
currentGame.player.drawPlayer();
currentGame.walls.drawWalls();
}

document.onkeydown=function(event){
    if (
        event.key === 'ArrowLeft'|| 
        event.key === 'ArrowRight'|| 
        event.key === 'ArrowUp'|| 
        event.key === 'ArrowDown'
    ) {
        event.preventDefault();
        myPlayer.move(event.key);
    }
    
};
