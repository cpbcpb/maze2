var myCanvas = document.getElementById("the-canvas");
var ctx = myCanvas.getContext("2d");
var currentGame;
var playerImage;
var tracksImage;
var enemyImage;
var imgData = [];

function Game() {
    this.player = {};
    this.wall = {};
    this.enemy = {};
    this.prize = {};
    console.log("This game exists");
  }
  Game.prototype.clearBoard = function (){
      ctx.clearRect(0, 0, 900, 900);
  }
  Game.prototype.youLose = function(){
  
      if (
        myPlayer.x + myPlayer.width >= myEnemy.x &&
        myPlayer.x <= myEnemy.x + myEnemy.width ){
          if(
            myPlayer.y + myPlayer.height >= myEnemy.y &&
            myPlayer.y <= myEnemy.y + myEnemy.height){
              alert('The shark ate you.  You lost! Next time avoid hitting the walls.')
      
            }
          
          }
         
  }
  Game.prototype.youWin = function(){
  
    if (
      myPlayer.x + myPlayer.width >= myPrize.x &&
      myPlayer.x <= myPrize.x + myPrize.width ){
        if(
          myPlayer.y + myPlayer.height >= myPrize.y &&
          myPlayer.y <= myPrize.y + myPrize.height){
            alert('You won!  Trolly loves his treasure!')
    
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
    currentGame.player.drawPlayer();
    currentGame.walls.drawWalls();
    currentGame.enemy.drawEnemy();
    currentGame.prize.drawPrize();
  };
  
  document.onkeydown = function(event) {
  
    if (
      event.key === "ArrowLeft" ||
      event.key === "ArrowRight" ||
      event.key === "ArrowUp" ||
      event.key === "ArrowDown"
    ) {
      event.preventDefault();
      currentGame.player.move(event.key);
      currentGame.youLose();
      currentGame.youWin();
      currentGame.enemy.chasePlayer(event.key);
     
    }
  };
  