function fib(x) {
  if (x === 1) {
    return "1"; // first sequence without zero
  } else {
    var n = [0,1];
    for (i = 2; i < x; i++){
      n.push(n[n.length - 1] + n[n.length - 2]); // fib sequence formula
    }
    n = n.slice(1,n.length); // slice list removing 0 from sequence
    return n.join(", "); // formatting to the specifications
  }
}

var x = 6;
console.log(fib(x)); // should output '1, 1, 2, 3, 5'
