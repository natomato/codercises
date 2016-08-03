//Design an algorithm and write code to remove the duplicate characters 
//in a string without using any additional buffer NOTE: One or two additional 
//variables are fine An extra copy of the array is not
//FOLLOW UP
//Write the test cases for this method

//Time complexity: O(n^2)
//Space complexity: 2n
function slowRemoveDuplicates (str) {
  var chars = str.split('');
  return chars.reduce(function (result, char, i) {
    
    if (result.indexOf(char) !== -1) {
      return result
    }
    else {
      return result += char
    }
    
  },"")
    
}

// Time complexity: O(n)
// Space complexity: 2n
function fastRemoveDuplicates (str) {
  var chars = str.split('')
  var dictionary = {}
  var result = ''
  
  chars.forEach(function (char) {
    if (!(char in dictionary)) {
      dictionary[char] = 1
      result += char;
    }
  })

  return result
}

var removeDuplicates = fastRemoveDuplicates;

removeDuplicates("c") //-> "c"
removeDuplicates("caa") //-> "ca"
removeDuplicates("aaa") //-> "a"
removeDuplicates("") //-> ""
removeDuplicates("aaabbb") //-> "ab"
removeDuplicates("abccbadefe") //-> "abcdef"