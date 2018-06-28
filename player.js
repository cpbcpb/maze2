//i think to get the direction to work i need a function
//where a button press triggers lookleft variables truefalse 
//and then sets the srcY to the right level in the sprite sheet, should be
//about spritesheetheight/spritesheetrows*(desiredrow-1)


//first thing however is to tie my sprite to my player thingys and make it all work
function Player() {
    // x and y coordinates of the canvas to get a single frame
    this.spriteWidth = 576;
    this.spriteHeight=256;
    this.rows=4;
    this.cols=9;
    this.trackUp=0;
    this.trackLeft=1;
    this.trackDown=2;
    this.trackRight=3;
    this.widthFrame = this.spriteWidth/this.cols;
    this.heightFrame = this.spriteHeight/this.rows;
    this.width=30,
    this.height=30;
    this.curFrame=0;
    this.frameCount=9;
    this.x = 100;
    this.y = 100;
    this.srcX=0;
    this.srcY=0;
    this.up=false;
    this.down=false;
    this.left=true;
    this.right=false;
    this.speed = 4;
    this.xArray = [ ];
    this.yArray = [ ];
    this.directionArray = [];
    this.img = "./images/fantasy/orc_piratess.png";
    //https://gamedevelopment.tutsplus.com/tutorials/an-introduction-to-spritesheet-animation--gamedev-13099
    this.moveCounter = 0;
    


    //row 1 backside // row 2 facing left //row 3 frontside//row 4 facing right//




    //however my 9th one is fallen down so maybe not...

    }
    // Player.prototype.drawPlayer = function() {
    //   this1 = this;
    //   playerImage = new Image();
    //   playerImage.src = this1.img;
    //   playerImage.onload = function() {
    //     ctx.drawImage(playerImage, this1.x, this1.y, this1.width, this1.height);
    //   };
    // };
    
  Player.prototype.createPlayerImage=function(){
    playerImage = new Image();
    playerImage.src = "./images/fantasy/orc_piratess.png";
  }

  Player.prototype.canIMove = function(futurex, futurey) {
    var canmove = true;
    for (j = 0; j < myWalls.matrix.length; j++) {
      for (i = 0; i < myWalls.matrix.length; i++) {
        if (myWalls.matrix[i][j] == 1) {
          myWalls.x = j * 23;
          myWalls.y = i * 23;
          myWalls.width = 23;
          myWalls.height = 23;
        }
        if (
          futurex + this.width >= myWalls.x &&
          futurex <= myWalls.x + myWalls.width &&
          futurey + this.height >= myWalls.y &&
          futurey <= myWalls.y + myWalls.height
        ) {
          canmove = false;
        } else if (
          futurex + this.width >= 800 ||
          futurex <= 0 ||
          futurey + this.height >= 800 ||
          futurey <= 0
        ) {
          canmove = false;
        }
      }
    }
    return canmove;
  };

  Player.prototype.move = function(whichKey) {
    ////erases old player location
    this.moveCounter+=1;
    // ctx.clearRect(this.x, this.y, this.width, this.height);
    switch (whichKey) {
      case "ArrowLeft":
          myPlayer.left=true;
         myPlayer.right=false;
         myPlayer.up=false;
         myPlayer.down=false;
        if (this.canIMove(this.x - this.speed, this.y)) {
          this.yArray.push(this.y)
          this.xArray.push(this.x)
          this.directionArray.push(this.trackLeft);
          this.x -= this.speed;
        }
        break;
      case "ArrowRight":
         myPlayer.left=false;
         myPlayer.right=true;
         myPlayer.up=false;
         myPlayer.down=false;
      if (this.canIMove(this.x + this.speed, this.y)) {
          this.x += this.speed;
          this.yArray.push(this.y)
          this.xArray.push(this.x)
          this.directionArray.push(this.trackRight);
  
        }
        break;
      case "ArrowUp":
          myPlayer.left=false;
          myPlayer.right=false;
          myPlayer.up=true;
          myPlayer.down=false;
        if (this.canIMove(this.x, this.y - this.speed)) {
          this.y -= this.speed;
          this.yArray.push(this.y)
          this.xArray.push(this.x)
          this.directionArray.push(this.trackUp);
        }
        break;
      case "ArrowDown":
          myPlayer.left=false;
          myPlayer.right=false;
          myPlayer.up=false;
          myPlayer.down=true;
        if (this.canIMove(this.x, this.y + this.speed)) {
          this.y += this.speed;
          this.yArray.push(this.y)
          this.xArray.push(this.x)
          this.directionArray.push(this.trackDown);
        }
    }
    // //draws image at new location
    // clearInterval();
    myPlayer.drawPlayer();
  };
  
  Player.prototype.spriteUpdateFrame=function(){
    //updating the frame index
    myPlayer.curFrame= ++ myPlayer.curFrame % myPlayer.frameCount;
    //Calculating the x coordinate for spritesheet
    myPlayer.srcX = myPlayer.curFrame * myPlayer.widthFrame;
    //lets clear old sprite image
    ctx.clearRect(myPlayer.x,myPlayer.y,myPlayer.width, myPlayer.height+5);
    //if want automatic motion, could put several if (direction) statement here that changes x or y
    //get this thing to turn!
    if(myPlayer.left && myPlayer.x>0){
      myPlayer.srcY=myPlayer.trackLeft*myPlayer.heightFrame;
    }
    if(myPlayer.right && myPlayer.x<canvasWidth-myPlayer.width){
      myPlayer.srcY=myPlayer.trackRight*myPlayer.heightFrame;
    }
    if(myPlayer.up){
      myPlayer.srcY=myPlayer.trackUp*myPlayer.heightFrame;
    }
    if(myPlayer.down && myPlayer.y<canvasHeight-myPlayer.height){
      myPlayer.srcY=myPlayer.trackDown*myPlayer.heightFrame;
    }
  }
  Player.prototype.draw = function(){
    myPlayer.spriteUpdateFrame();
    ctx.drawImage(playerImage, myPlayer.srcX, myPlayer.srcY, myPlayer.widthFrame, myPlayer.heightFrame, myPlayer.x, myPlayer.y, myPlayer.width, myPlayer.height)
}
  Player.prototype.drawPlayer=function(){
    clearInterval(currentGame.intervalThing);
    currentGame.intervalThing = setInterval(function(){
      myPlayer.draw();
    }, 80);
  }
