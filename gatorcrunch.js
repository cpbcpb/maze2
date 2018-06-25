//gets canvas from the html
var myCanvas = document.getElementById('the-canvas');
var ctx = myCanvas.getContext('2d');
//creates global variables
var currentGame;
var playerImage;
var tracksImage;
var imgData = [];
// constructor function game how do i put player in here?
function Game(){
        this.walls={}
        this.timeRemaining={}
        console.log("This game exists")
    }
    //collision detector
    //array of walls
    //timer

////tried making maze an image drawn on the canvas...will need to do
////this if multiple levels but for now, maze is background img of canvas in css
//// maze images generated using http://hereandabove.com/maze/mazeorig.form.html
//////constructor function player
//// function Walls(){
//// maze.src="/images/maze1hereandabove.gif";

//// }
////Walls.prototype.drawMaze=function(){
////     var maze = new Image ();
//// }

var Walls = function (){

}
Walls.prototype.drawWalls = function(){
ctx.fillRect(50,50,600,4);
ctx.fillRect(650,50, 4, 600);
ctx.fillRect(350, 646, 300, 4);
ctx.fillRect(50, 646, 250, 4);
ctx.fillRect(50, 646, 250, 4);
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
}40
Player.prototype.drawPlayer = function (){
    that=this;
    playerImage = new Image();
    playerImage.src = that.img;
    playerImage.onload=function(){
    ctx.drawImage(playerImage, that.x, that.y, that.width, that.height)
    }
    playerImage.crossOrigin= "Anonymous";
    console.log("trying to draw player")
}
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
//sets new location based on key pressed
switch(whichKey){
case 'ArrowLeft':
this.x -=this.speed;
break;
case 'ArrowRight':
this.x +=this.speed;
break;
case 'ArrowUp':
this.y -=this.speed;
break;
case 'ArrowDown':
this.y +=this.speed;
}
//draws image at new location
ctx.drawImage(playerImage, this.x, this.y, this.width, this.height);
}
// Player.prototype.checkCollision=function(futurex, futurey){
// if
    // (futurex + this.width >=currentGame.)


         // Tried getting the data on the pixels that will be covered by player if player moves.
         //However got an error image tainted so did this differently instead.
         //will need this approach if change to maze as an img instead of drawing rectangles
        // var imgData = ctx.getImageData(this.x, this.y, this.width, this.height).data;
        //if pixel is back don't move.  
// }
console.log(ctx.getImageData(this.x, this.y, 100, 100));
Player.prototype.collisionCheck=function(){
    imgData = ctx.getImageData(this.x, this.y, 100, 100);
        console.log(imgData);
        // imgData.setAttribute('crossOrigin', '');
        // imgData.crossOrigin= "Anonymous";
}

function PowerUps(){
    //array of food imgs?
}
//constructor function wall

//constructor function power up

// constructor function predators


document.getElementById("start-button").onclick = function (){
currentGame = new Game();
myPlayer = new Player ();
myPlayer.drawPlayer();
myWalls = new Walls();
myWalls.drawWalls();
}

document.onkeydown=function(event){
    if (event.key === 'ArrowLeft'|| event.key ==='ArrowRight'|| event.key ==='ArrowUp'|| event.key ==='ArrowDown'){
        event.preventDefault();
        myPlayer.move(event.key);
    }
    
}
