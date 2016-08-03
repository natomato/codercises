/*
Imagine a robot sitting on the upper left hand corner of an NxN grid The robot can only move in two directions: right and down How many possible paths are there for the robot?
FOLLOW UP
Imagine certain squares are “off limits”, such that the robot can not step on them Design an algorithm to get all possible paths for the robot
*/
function countPaths (grid, currentPos) {
  currentPos = currentPos || new Coord(0, 0)
  var lastPos = grid.length - 1;
  var finish = new Coord(lastPos, lastPos) //assume grid is a square
  if (!currentPos.isValid(grid)) {
    return 0
  }
  if (currentPos.isEqual(finish)) {
    return 1    
  }
  return countPaths(grid, currentPos.down()) + countPaths(grid, currentPos.right())
}


function Coord (x, y) {
  this.x = x;
  this.y = y;
  this.isEqual = function (coord) {
    return this.x === coord.x && this.y === coord.y
  }
  this.down = function () {
    return new Coord(this.x, this.y + 1)
  }
  this.right = function () {
    return new Coord(this.x + 1, this.y)
  }
  this.isValid = function (grid) {
    if (grid[this.x]) {
      return grid[this.x][this.y] === 0;
    }
    return false;
  }
}

var p1 = new Coord(0, 0);
var p2 = new Coord(0, 0);
p1.isEqual(p2) // true


var tiny = [
  [0]
]

var small = [
 [0, 1],
 [0, 0],
]

var grid = [
  [0, 0, 1],  
  [0, 0, 0], 
  [0, 0, 0],  
]

var grid = [
  [0, 0, 0],  
  [0, 0, 0], 
  [0, 0, 0],  
]

p1.isValid(tiny)
p1.down().isValid(tiny)

// Most basic testing
// copy and paste the file into a node repl and manually verify the output
countPaths(tiny) //-> 1
countPaths(small) //-> 2
countPaths(grid) //-> 6


//this kind of works, but the experience stinks
//no feedback when passing, error when failing
var assert = require('assert')
assert.equal(countPaths(tiny), 2)

// export default countPaths
// "SyntaxError: Unexpected reserved word 'export'"
// Why does this work locally in node? Maybe I could use babel?
// Unable to require file until I can export. 
