// Fibonacci sequence generator
function fibonacciGenerator(n) {
  let output = [];
  if (n === 1) {
    output = [0];
  } else if (n === 2) {
    output = [0, 1];
  } else {
    output = [0, 1];
    for (let i = 2; i < n; i++) {
      output.push(output[output.length - 2] + output[output.length - 1]);
    }
  }
  return output;
}
output = fibonacciGenerator();
console.log(output);

// Task is find a number from Fibonacci sequence
// Option 1
function fibonacci(num) {
  const result = [0, 1];
  for (let i = 2; i <= num; i++) {
    const prevNum1 = result[i - 1];
    const prevNum2 = result[i - 2];
    result.push(prevNum1 + prevNum2);
  }
  return result[num];
}
console.log(fibonacci(7));

// Option 2
function fibonacciShort(num) {
  let a = 1,
    b = 1;
  for (let i = 3; i <= num; i++) {
    [a, b] = [b, a + b];
  }
  return b;
}
console.log(fibonacciShort(7));

// Option 3
function fibonacciRecursion(num) {
  if (num < 2) {
    return num;
  }
  return fibonacciRecursion(num - 1) + fibonacciRecursion(num - 2);
}
console.log(fibonacciRecursion(7));
