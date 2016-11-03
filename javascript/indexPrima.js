function primeTester (n) {
  if(n === 2) {
    return true;
  }
  if(n < 2 || n%2 === 0) {
    return false;
  }
  for(var i = 3; i <= Math.sqrt(n); i+=2) {
    if(n%i === 0) {
      return false;
    }
  }
  return true;
}

function n(num) {
  var arr = [];
  var j = 2;
  while (arr.length < num) {
    if (primeTester(j)) {
      arr.push(j);
    }
    j++;
  }
  return arr.pop();
}

console.log(n(1));
