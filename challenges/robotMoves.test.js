var test = require('tape')
// var countPaths = require('./robotMoves')

test('basic', function (t) {
  t.plan(1)
  t.equal(1,1, 'sanity test')
})

var tiny = [
  [0]
]

var small = [
 [0, 0],
 [0, 0],
]

var grid = [
  [0, 0, 0],  
  [0, 0, 0], 
  [0, 0, 0],  
]


test('base case', function (t) {
  t.plan(1);
  // t.equal(countPaths(tiny), 1)
  t.equal(1, 2)
})