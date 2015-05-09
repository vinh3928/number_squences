var squence = [1, 2, 4, 8, 16, 32];

var numbSquence = function(array) {
  var holder = 0, i = 0, aLength = 0;
    aLength = array.length
  while (i < 10) {
    holder = array[aLength - 1 + i] * 2
    array.push(holder)
    i ++
    holder = 0
  }
    return array
}

console.log(numbSquence(squence));

var aSquence = [ 0, 5, 2, 7, 4, 9]
var bSquence = [ 1, 2, 4, 8, 16, 32]
var cSquence = [ 1, 2, 4, 16, 256, 65536]
var dSquence = [ 1, 4, 7, 10, 13, 16]
var eSquence = [ 1, 3, 9, 27, 81]
var fSquence = [ 1, 2, 5, 12, 29]
var gSquence = [ 1, 1, 3, 3, 5, 5]

var randSquence = function(array) {
    var aL = array.length
    // for gSquence
    if (array[aL -1] === array[aL -2] || array[aL -2] === array[aL -3]) {
        if (array[aL -1] === array[aL -2]) {
        array.push(array[aL-1] + (array[aL -2] - array[aL -3]))
        return array
      } else {
        array.push(array[aL -1])
        return array
      }
    } // for dSquence
      else if (array[2] - array[1] === array[1] - array[0]) {
      array.push(array[1] - array[0] + array[aL - 1])
      return array
    // for bSquence and eSquence
    } else if (array[aL -1] / array[aL - 2] === array[aL -2] / array[aL -3] && array[aL -2] / array[aL -3] === array[aL -3] / array[aL -4]) {
      array.push(array[aL-1] * array[aL - 1] / array[aL -2] );
      return array
    // for cSquence
    } else if (Math.sqrt(array[aL -1]) === array[aL -2] && Math.sqrt(array[aL -2]) === array[aL -3]) {
      array.push(array[aL -1] * array[aL -1])
      return array
    // for aSquence
    } else if (array[aL - 1] - array[aL -2] === array[aL - 3] - array[aL -4]) {
      array.push(array[aL - 2] - array[aL -3] + array[aL -1])
      return array
    } else if (array[aL - 1] - array[aL -2] - array[aL -3] === array[aL -2]) {
      array.push(array[aL -1] + array[aL -1] + array[aL -2])
      return array
    } else {
      return "I did not account for this squence"
    }
}

console.log(randSquence(gSquence));

