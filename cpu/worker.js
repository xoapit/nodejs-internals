const workerpool = require("workerpool");

// a deliberately inefficient implementation of the fibonacci sequence
function fibonacci(n) {
  if (n < 2) return n;
  return fibonacci(n - 2) + fibonacci(n - 1);
}

function calculateTotal(n) {
  let total = 0;
  for (let i = 0; i < n; i++) {
    total += i;
  }
  return total;
}

// create a worker and register public functions
workerpool.worker({
  fibonacci: fibonacci,
  calculateTotal: calculateTotal,
});
