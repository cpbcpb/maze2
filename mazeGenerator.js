
var Maze = function (){
  this.height=32;
  this.width=48;
  this.mazeMatrix = []
}
//makes a matrix full of 1s of give height and width

Maze.prototype.createMatrix = function(){
  for (var y = 0; y < this.height; y++){
    this.mazeMatrix [ y ] = [];
    for (var x = 0; x < this.width; x++){
      this.mazeMatrix [ y ][ x ] = 1;
    }
  } return this.mazeMatrix
}
// myMaze = new Maze;
// // myMaze.createMatrix();
// console.log(myMaze.mazeMatrix);
//removes the outermost ones and replaces with zeros
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
//creates a random path through the maze
Maze.prototype.clearPath = function (){
  var directionNumber = Math.floor(Math.random()*4);
  var currenty = 2;
  var currentx = 2;
  var oldy = [2];
  var oldx = 2;
  var futurey = 2;
  var futurex = 2;
  // my starting point is made
  this.mazeMatrix[currenty][currentx]=0;
//pick a random point 2 points away
  for (i=0; i < 200; i++) {
    var directionNumber = Math.floor(Math.random()*4);
    switch(directionNumber){
      case 0:
  //0 is up
        futurey=currenty-2
  //if is checking that the location is a wall in the maze
        if (this.mazeMatrix[futurey][currentx]===2){
        oldy = currenty
        currenty -= 1;
        this.mazeMatrix[currenty][currentx]=0;
        currenty -= 1;
        this.mazeMatrix[currenty][currentx]=0;
        }
        break;
      case 1:
      // 1 is right
          futurex = currentx + 2;
          if (this.mazeMatrix[ currenty ][ futurex ] === 2 ){
          oldx = currentx;
          currentx +=1;
          this.mazeMatrix[currenty][currentx]=0;
          currentx += 1;
          this.mazeMatrix[currenty][currentx]=0;
          }
          break;
      case 2:
      // 2 is down
        futurey = currenty + 2;
          if (this.mazeMatrix[ futurey ][ currentx ]===2){
            oldy = currenty;
          currenty += 1;
          this.mazeMatrix[ currenty ][ currentx ]=0;
          currenty += 1;
          this.mazeMatrix[ currenty ][ currentx ]=0;
          }
          break;
      case 3:
      //3 is left
          futurex = futurex - 2;
          if (this.mazeMatrix[ currenty ][ futurex ]===2){
            oldx = currentx;
            currentx -= 1;
            this.mazeMatrix[currenty][currentx] = 0;
            currentx -= 1;
          this.mazeMatrix[ currenty ][ currentx ] = 0;
          }
        
        
        //close if
    }//close switch
  }//close for
}//closemaze
//do i need to prevent it from backtracking unless necessary?
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
// myMaze = new Maze
// myMaze.createMatrix()
// myMaze.clearEdges()
// myMaze.clearPath()
// console.log(myMaze.mazeMatrix)

// console.log( matrix);
// foo,foo,foo,foo,foo,foo
// foo,foo,foo,foo,foo,foo
// foo,foo,foo,foo,foo,foo
// foo,foo,foo,foo,foo,foo
matrix =
[
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
[1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1], 
[1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1], 
[1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1], 
[1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1], 
[1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1], 
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
[1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1], 
[1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1], 
[1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1], 
[1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1], 
[1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1], 
[1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1], 
[1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1], 
[1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1], 
[1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1], 
[1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1], 
[1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1], 
[1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1], 
[1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1], 
[1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1], 
[1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1], 
[1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1], 
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
[1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1], 
[1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1], 
[1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1], 
[1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1], 
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] 
];

