// TODO: Fix bugs
// Write a recursive function for generating all permutations of an input string. Return them as a set.
// Don't worry about time or space complexity—if we wanted efficiency we'd write an iterative version.
// To start, assume every character in the input string is unique.
// Your function can have loops—it just needs to also be recursive.


// (string) -> array
function start (str) {
  return recursiveSet([str])
}

// array -> array
function recursiveSet (arr) {
  if (!str.length) {
    return items;
  }
  
  //GOAL: take one step closer to empty string
  //separate 1st element from rest
  var head = elements.slice(0,1)
  var tail = elements.slice(1)
  //add the first element as its own set -> ['a']
  items.add(head);
  
  //combine first element with recursiveSet(tail) => ['a'] + recursiveSet() -> [''] 
  //  => ['a'], Set will just ignore this extra 'a'
  var tailGroups = recursiveSet(tail.join(''), items);
  var headGroups = tailGroups.forEach(function(group) {
    return head+group
  });
  
  //add the results of the previous function call => [''] + ['a'] => ['a', '']

  items = items.concat(headGroups, tailGroups)
  
  
  
  return [str, items];
  
}




recursiveSet('') //-> ['']
recursiveSet('a') //-> ['', 'a']
recursiveSet('ba') // -> [ab, ba, a, b, '']



  

// create a set
function MySet() {
  var items = []; 
  this.add = function(num) {
    if (!items.includes(num)) {
      items.push(num);  
    }
    return items;
  }
  this.entries = function() {
    return items
  }
  this.concat = function (arr) {
    items = items.concat(arr)
    return items
  }
}


var s = new MySet();
s.add(1) //-> [1]
s.add(2) //-> [1, 2]
s.add(1) //-> [1, 2]
s.entries() //-> [1, 2]