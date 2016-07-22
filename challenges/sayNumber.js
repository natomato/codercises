// (1234) -> 'one thousand two hundred thirty four'
var NUM_WORD = [
  'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight',
  'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
  'sixteen', 'seventeen', 'eighteen', 'nineteen',
]

var PLACEHOLDER = {
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
}

function sayNumber (num) {
  if (num === 0) return NUM_WORD[0]
  var level = 0
  return chunk(num).reduce(function (words, chunk, index) {
    level = PLACEHOLDER[(Math.pow(1000, index))]
    words = buildNumber(chunk) + ' ' +
            (level ? level + ' ' : '') +
            words
    return words
  }, '')
}

// (1234) -> [ [ '4', '3', '2' ], [ '1' ] ]
function chunk (num) {
  var chunks = []
  var cache = []
  String(num)
    .split('')
    .reverse()
    .map(function (digit) {
      cache.push(digit)
      if (cache.length === 3) {
        chunks.push(cache.slice(0, 3))
        cache = []
      }
    })

  if (cache.length) { // an incomplete triplet
    chunks.push(cache)
  }
  return chunks
}

function buildNumber (digits) {
  var words = ''
  var hundreds = Number(digits[2])
  var tens = Number(digits[1])
  var ones = Number(digits[0])

  if (hundreds) {
    words = words + NUM_WORD[hundreds] + ' ' + PLACEHOLDER['100']
  }

  if (tens === 1) {
    words = words + ' ' + NUM_WORD[10 + ones]
    return words
  }
  if (tens > 1) {
    words = words + PLACEHOLDER[10 * tens]
  }

  if (ones) {
    words = words + ' ' + NUM_WORD[ones]
  }

  return words
}

sayNumber(100) // -> one hundred
sayNumber(1) // -> one
sayNumber(0) // -> zero
sayNumber(101) // -> one hundred one
sayNumber(101000) // -> 'one hundred one thousand'
sayNumber(100200300) // -> 'one hundred million two hundred thousand three hundred '
sayNumber(100200301) // -> 'one hundred million two hundred thousand three hundred one '
sayNumber(1002003011) // -> 'one billion  two million  three thousand  eleven '
