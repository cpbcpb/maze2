function Player() {
    //img (array of position sprites)
    //counter or lives?
    //speed?
    this.x = 50;
    this.y = 720;
    // number of array entries is how far a head start player gets, 
    // must be the same in x and y
    this.xArray = [ ];
    this.yArray = [ ];
    this.width = 23;
    this.height = 23;
    this.img = "images/animals/lilgator.png";
    //https://gamedevelopment.tutsplus.com/tutorials/an-introduction-to-spritesheet-animation--gamedev-13099
    this.tracks = "images/trackscpb.png";
    this.moveCounter = 0;
    this.speed = 5;
    console.log("This player exists");
  }
  
  Player.prototype.drawPlayer = function() {
    this1 = this;
    playerImage = new Image();
    playerImage.src = this1.img;
    playerImage.onload = function() {
      ctx.drawImage(playerImage, this1.x, this1.y, this1.width, this1.height);
    };
  };
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
    ctx.clearRect(this.x, this.y, this.width, this.height);
    switch (whichKey) {
      case "ArrowLeft":
          this.moveCounter +=1;
        if (this.canIMove(this.x - this.speed, this.y)) {
          this.yArray.push(this.y)
          this.xArray.push(this.x)
          this.x -= this.speed;
        }
        break;
      case "ArrowRight":
         this.moveCounter +=1;
      if (this.canIMove(this.x + this.speed, this.y)) {
          this.x += this.speed;
          this.yArray.push(this.y)
          this.xArray.push(this.x)
  
        }
        break;
      case "ArrowUp":
          this.moveCounter +=1;
        if (this.canIMove(this.x, this.y - this.speed)) {
          this.y -= this.speed;
          this.yArray.push(this.y)
          this.xArray.push(this.x)
          this.moveCounter +=1;
        }
        break;
      case "ArrowDown":
          this.moveCounter +=1;
        if (this.canIMove(this.x, this.y + this.speed)) {
          this.y += this.speed;
          this.yArray.push(this.y)
          this.xArray.push(this.x)
          this.moveCounter +=1;
        }
    }
    //draws image at new location
    ctx.drawImage(playerImage, this.x, this.y, this.width, this.height);
  };