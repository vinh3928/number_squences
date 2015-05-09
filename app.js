var squence = [1, 2, 4, 8, 16, 32];

var numbSquence = function(array) {
  var holder = 0, i = 0;
  while (i < 1) {
    holder = array[array.length - 1 + i] * 2
    array.push(holder)
    i ++
  }
    return array
}

console.log(numbSquence(squence));

