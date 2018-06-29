var myCanvas = document.getElementById("the-canvas");
var ctx = myCanvas.getContext("2d");
var currentGame;
var playerImage;
var tracksImage;
var enemyImage;
var canvasWidth=1200;
var canvasHeight=750;
var intervalThing;
var intervalThingEnemy;
var pause = false;
var loser = 0;
function Game() {
    this.player = {};
    this.wall = {};
    this.enemy = {};
    this.prize = {};
    console.log("This game exists");
  }
  Game.prototype.clearBoard = function (){
      ctx.clearRect(0, 0, 1200, 1200);
  }
  Game.prototype.youLose = function(){
  
      if (
        myPlayer.x + myPlayer.width >= myEnemy.x &&
        myPlayer.x <= myEnemy.x + myEnemy.width ){
          if(
            myPlayer.y + myPlayer.height >= myEnemy.y &&
            myPlayer.y <= myEnemy.y + myEnemy.height){
             if (loser===0){
               alert("You have been captured by Radagast the Brown! Will he feed your corpse to his rabbits?");
               loser = loser +1;
             }
            }
          
          
          }
         
  }
  Game.prototype.youWin = function(){
  
    if (
      myPlayer.x + .9*myPlayer.width >= myPrize.x &&
      myPlayer.x <= myPrize.x + .9*myPrize.width ){
        if(
          myPlayer.y + .9*myPlayer.height >= myPrize.y &&
          myPlayer.y <= myPrize.y + .9*myPrize.height){
            alert('You won!  Orcie loves her treasure!')
            return true;
          }
        
        }
       
  }



document.getElementById("start-button").onclick = function() {
    currentGame = new Game();
    myPlayer = new Player();
    myWalls = new Walls();
    myEnemy = new Enemy();
    myPrize = new Prize();
    currentGame.clearBoard();
    currentGame.player = myPlayer;
    currentGame.walls = myWalls;
    currentGame.enemy = myEnemy;
    currentGame.prize = myPrize;
    currentGame.walls.drawWalls();
    currentGame.prize.drawPrize();
    currentGame.player.createPlayerImage();
    currentGame.enemy.createEnemyImage();
    currentGame.player.drawPlayer();
    currentGame.enemy.drawEnemy();
  };
  
document.getElementById("pause-button").onclick = function (){
if (pause===false){
  pause=true}
else if (pause === true){
  pause=false}
}

  var intervalThing;
  var intervalThingEnemy;
  var intervalThingGame;
  var intervalThingWalls;
  document.onkeydown = function(event) {
    if (loser>=1){
      alert("You lost! Press Start to try again!")
      location.reload();
    }
    else if (pause===true){
    clearInterval(intervalThingGame)}
    else if (
      event.key === "ArrowLeft" ||
      event.key === "ArrowRight" ||
      event.key === "ArrowUp" ||
      event.key === "ArrowDown"
    ) {
      event.preventDefault();
      clearInterval(intervalThingGame);
      //  currentGame.player.move(event.key);
      // currentGame.enemy.chasePlayer(event.key);
      currentGame.walls.drawWalls();
      currentGame.prize.drawPrize();
      

      currentGame.youWin();
      clearInterval(intervalThingWalls);
      //without this interval the wall the player is passing gets erased due to larger erase size due to pixels being left bein
      intervalThingWall = setInterval(function(){
        currentGame.walls.drawWalls();
      }, 5)
      intervalThingGame = setInterval(function(){
        if (pause===false){
        currentGame.enemy.chasePlayer(event.key);
        currentGame.player.move(event.key);
        currentGame.youLose();}
          // if(loser>=1){
          //   clearInterval(intervalThingGame)
          // }

      }, 11)
    
    
    }
  };

  // document.onkeydown = function(event) {
  //   clearInterval(blah); 
  //   if (event.key === 'ArrowLeft'|| event.key ==='ArrowRight'|| event.key ==='ArrowUp'|| event.key ==='ArrowDown'){
  //     event.preventDefault();

  //      blah = setInterval(function(){
  //       theCar.move(event.key, 2);
  //     }, 10);
  //   }
  // }
