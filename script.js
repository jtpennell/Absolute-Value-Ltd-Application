function fib(x) {
  if (x === 1) {
    return [0,1];
  } else {
    var n = fib(x - 1);
    n.push(n[n.length - 1] + n[n.length - 2]);
    return n;
  }
}

var x = 6;
console.log(fib(x));
