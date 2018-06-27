
function Enemy() {
    this.x = 600;
    this.y = 720;
    this.width = 23;
    this.height = 23;
    this.img = "images/Animals/freeshark.png";
    this.speed = 2;
    this.headStart=70;
    console.log("this enemy exists");
  }
  Enemy.prototype.drawEnemy = function() {
    that1 = this;
    enemyImage = new Image();
    this.matrix = currentGame.matrix;
    enemyImage.src = that1.img;
    enemyImage.onload = function() {
      ctx.drawImage(enemyImage, that1.x, that1.y, that1.width, that1.height);
    };
  };
  Enemy.prototype.chasePlayer = function(whichKey) {
    if(myPlayer.xArray.length>this.headStart){
      if (whichKey === 'ArrowLeft' || 'ArrowRight' || 'ArrowUp' || 'ArrowDown'){
      ////erases old enemy location
      ctx.clearRect(this.x, this.y, this.width, this.height);
      var chaseLeadFactor = 2.5;
      var chaseCloseness =  Math.floor(myPlayer.moveCounter/chaseLeadFactor);
      //adds to counter each time a arrow key is clicked
      this.x = myPlayer.xArray[chaseCloseness];
      this.y = myPlayer.yArray[chaseCloseness];
      //draws enemy at new location from array of where player has been. 
      //slight head start to player but hitting walls is very bad.
      ctx.drawImage(enemyImage, this.x, this.y, this.width, this.height);
    };
  }
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