
var Maze = function (){
    this.height=15;
    this.width=20;
    this.mazeMatrix = []
  }
  
  Maze.prototype.createMatrix = function(){
    for (var y = 0; y < this.height; y++){
      this.mazeMatrix [ y ] = [];
      for (var x = 0; x < this.width; x++){
        this.mazeMatrix [ y ][ x ] = 1;
      }
    } return this.mazeMatrix
  }
  
  Maze.prototype.clearEdges = function (){
    var clearx = 0;
    var cleary = 0;
    for (cleary = 0; cleary < this.height; cleary ++ ) {
      clearx = 0;
      this.mazeMatrix[ cleary ][ clearx ] = 0;
      clearx = this.width-1;
      this.mazeMatrix[ cleary ][ clearx ] = 0; 
    }
    var clearx = 0;
    var cleary = 0;
    for (clearx = 0; clearx < this.width; clearx ++ ) {
      cleary = 0;
      this.mazeMatrix[ cleary ][clearx ] = 0;
      cleary = this.height-1;
      this.mazeMatrix[ cleary ][ clearx ] = 0;
    }
  }
  Maze.prototype.clearPath = function (){
  var directionNumber = Math.floor(Math.random()*4);
  // 0 is up 1 is right 2 is down 3 is left
  // case(0)
  //  { }
  //need to choose a direction to go
  //need to identify a location 2 spaces in that direction
  //need to check that this location is in the matrix
  //need to check that this location is a 1
  //need to clear this location and those back on the path from //it 
  //maybe a switch statement for each direction after the random
  //number generator chooses a direction would work
  console.log(directionNumber)
  }
  myMaze = new Maze
  myMaze.createMatrix()
  myMaze.clearEdges()
  console.log(myMaze.mazeMatrix)
  myMaze.clearPath()