function Prize(){
    this.x=700;
    this.y=100;
    this.width=23;
    this.height=23;
    this.img="images/fantasy/chest dark.png"
  }
  Prize.prototype.drawPrize = function() {
    that2 = this;
    prizeImage = new Image();
    prizeImage.src = that2.img;
    prizeImage.onload = function() {
      ctx.drawImage(prizeImage, that2.x, that2.y, that2.width, that2.height);
    };
    console.log("trying to draw prize")
  };

  function PowerUps() {
    //array of food imgs?
  }