var primeRange = 100
var primeArray = []
var compareArrayOrigin = []
var alogrithmArray = []

var primeDetective = function(primeNumb) {
  
  var i = 0, j = 2, k = 0, l = 0
 //creating the array range of prime numbers to search in
  while (i <= primeRange) {
    primeArray[i] = i
 //initalizing comparison origin array as a placeholder
    compareArrayOrigin[i] = 2 * i + 1
 //initalizing alogrithm array
    alogrithmArray[i] = i
    i ++
  }

while (j <= 10) {

  while (k <= primeRange) {
    alogrithmArray[k] = 2 * compareArrayOrigin[k]
 // this loop removes numbers of 2n + 1 from primeArray
    while (l <= primeRange) {
      if (alogrithmArray[k] === primeArray[l]) {
        primeArray[l] = null;
      } else {

      }
      l ++;
    }
    alogrithmArray[k] = k
    k ++;
    l = 0
  }
 j ++
 k = 0
}

  return primeArray
}

console.log(primeDetective())

