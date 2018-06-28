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
  };

  function PowerUps() {
    //can i use random generator and then check move
    //to see if I can place them at random spots?
    //maybe ups and downs (double points)
    //super slow
    //
    //array of food imgs?
  }