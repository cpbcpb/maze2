
function Enemy() {


//maybe switch>
  this.spriteWidth = 480;
  this.spriteHeight=450;
  this.rows=5;
  this.cols=8;
  //frame last 4 frames
  this.trackUp=0;
  this.trackLeft=1;
  //first frame
  this.trackDown=0;
  this.trackRight=2;
  this.widthFrame = this.spriteWidth/this.cols;
  this.heightFrame = this.spriteHeight/this.rows;
  this.curFrame=0;
  this.frameCount=8;
  //not sure when each position has diffferent # frames...
  //so made these variables if i need them
  this.frameCountLeftandRight=8;
  this.upCurFrame = 1;
  this.upFrameArray=[5, 6, 7, 8];
  this.frameCountDown=1;
  this.frameCountUp=4;
  //starting point in the sprite
  this.srcX=0;
  this.srcY=0;
  // up 0 left 1 down 2 right 3
  this.direction=1;
 // *******
    this.x = 600;
    this.y = 720;
    this.width = 30;
    this.height = 30;
    this.img = "images/fantasy/wizard.png";
    this.speed = 2;
    this.headStart=20;
    //this is a percent of moves that must be good or you will be caught
    this.badMoveAllowed=.5
    //this is moves the enemy has taken already, moves along path of player
    this.enemyMoveCounter =0;
    //is the rounded up integer of enemyMoveCounter*badMoveAllowed
    this.enemyCalc=0;
  }
  Enemy.prototype.createEnemyImage = function() {
    that1 = this;
    enemyImage = new Image();
    enemyImage.src = that1.img;
    };

    Enemy.prototype.draw = function(){
      myEnemy.spriteUpdateFrame();
      ctx.drawImage(enemyImage, myEnemy.srcX, myEnemy.srcY, myEnemy.widthFrame, myEnemy.heightFrame, myEnemy.x, myEnemy.y, myEnemy.width, myEnemy.height);
    }

    Enemy.prototype.drawEnemy=function(){
      clearInterval(currentGame.intervalThingEnemy);
      currentGame.intervalThingEnemy = setInterval(function(){
        myEnemy.draw();
      }, 80);
    }


    //should i add an onload to new version of this function?
  // Enemy.prototype.drawEnemy = function() {
  //   that1 = this;
  //   enemyImage.onload = function() {
  //     ctx.drawImage(enemyImage, that1.x, that1.y, that1.width, that1.height);
  //   };
  // };
  Enemy.prototype.chasePlayer = function(whichKey) {
    if (myPlayer.xArray.length===myEnemy.headStart){
      alert("The fearsome wizzard Radagast the Brown is after you!")
    }
    if(myPlayer.xArray.length>myEnemy.headStart){
      if (whichKey === 'ArrowLeft' || 'ArrowRight' || 'ArrowUp' || 'ArrowDown'){
      // ////erases old enemy location
      // ctx.clearRect(myEnemy.x, myEnemy.y, myEnemy.width, myEnemy.height);
      myEnemy.enemyCalc=Math.ceil(myEnemy.enemyMoveCounter*myEnemy.badMoveAllowed)
      myEnemy.x = myPlayer.xArray[myEnemy.enemyCalc];
      myEnemy.y = myPlayer.yArray[myEnemy.enemyCalc];
      myEnemy.direction = myPlayer.directionArray[myEnemy.enemyCalc];
      //draws enemy at new location from array of where player has been. 
      //slight head start to player but hitting walls is very bad.
      myEnemy.drawEnemy();
      myEnemy.enemyMoveCounter+=1;
    };
  }
  }
  Enemy.prototype.spriteUpdateFrame=function(){
    ctx.clearRect(myEnemy.x, myEnemy.y, myEnemy.width, myEnemy.height);
    //if want automatic motion, could put several if (direction) statement here that changes x or y
    //get this thing to turn!
    //left is working

    //left is working
    if(myEnemy.direction===1){
      myEnemy.curFrame= ++ myEnemy.curFrame % myEnemy.frameCount;
      myEnemy.srcX = myEnemy.curFrame * myEnemy.widthFrame;
      myEnemy.srcY=myEnemy.trackLeft*myEnemy.heightFrame;
    }
//right is working
    if(myEnemy.direction===3){
      myEnemy.curFrame= ++  myEnemy.curFrame % myEnemy.frameCount;
      myEnemy.srcX = myEnemy.curFrame * myEnemy.widthFrame;
      myEnemy.srcY=myEnemy.trackRight*myEnemy.heightFrame;
    }
    //up 
    if(myEnemy.direction === 0){
      myEnemy.upCurFrame = ++ myEnemy.upCurFrame % myEnemy.frameCountUp;
      myEnemy.curFrame= myEnemy.upFrameArray[myEnemy.upCurFrame];
      myEnemy.srcX = myEnemy.curFrame * myEnemy.widthFrame;
      myEnemy.srcY=myEnemy.trackUp*myEnemy.heightFrame;
    }
//down is working.  down doesnt have illustrations except for 1
    if(myEnemy.direction=== 2){
      myEnemy.curFrame= 1;
      myEnemy.srcX = 0 * myEnemy.widthFrame;
      myEnemy.srcY=0 * myEnemy.heightFrame;
    }
    myPlayer.srcX = myPlayer.curFrame * myPlayer.widthFrame;
  }

    Enemy.prototype.canEnemyMove = function(futurex, futurey) {
      var canmove = true;
      for (j = 0; j < myWalls.matrix.length; j++) {
        for (i = 0; i < myWalls.matrix.length; i++) {
          if (myWalls.matrix[i][j] == 1) {
            myWalls.x = j * 50;
            myWalls.y = i * 50;
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
            futurex + this.width >= 900 ||
            futurex <= 0 ||
            futurey + this.height >= 900 ||
            futurey <= 0
          ) {
            canmove = false;
          }
        }
      }
      return canmove;

    };