// soultion 1

var holder = [], numb = 8;

var fibb = function(number) {

  var i = 0

  while (i < number) {
    if ( i < 2) {
      holder[i] = 1;
    } else {
      holder[i] = holder[i - 1] + holder[i - 2];
    }
      i ++;
  }
  return holder
}

console.log(fibb(numb))

// solution 2

var holder2 = [], numb = 18;
var fibb2 = function(number) {
  var i = 0
  while (i < number) {
    (i < 2 ? holder2[i] = 1 : holder2[i] = holder2[i - 1] + holder2[i - 2])
  i ++;
  }
  return holder2
}

console.log(fibb2(numb))
