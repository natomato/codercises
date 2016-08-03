//Implement an algorithm to determine if a string has all unique characters 
//What if you can not use additional data structures?

function hasDuplicates (str) {
  for (var i = 0; i < str.length; i++) {
    var char = str[i]
    var firstOccurrence = str.indexOf(char)
    var lastOccurrence = str.lastIndexOf(str[i])
    if ( firstOccurrence !== lastOccurrence) {
      return true
    }
  }
  return false
}

function hasDuplicates2 (str) {
  for (let char of str) {
    if (str.indexOf(char) !== str.lastIndexOf(char)) {
      return true
    }
  }
  return false
}

hasDuplicates('a') // false
hasDuplicates('caa') // true
hasDuplicates('cat') // false
hasDuplicates("c🐳 🐳 ")// true