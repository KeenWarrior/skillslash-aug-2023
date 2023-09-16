function sum(a, b) {
  console.log("sum");
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function op(a, b, opration) {
  return opration(a, b);
}

console.log(op(2, 3, multiply));
