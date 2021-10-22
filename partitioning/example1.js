const n = process.argv[2] || 20
let sum = 0;
for (let i = 0; i < n; i++)
  sum += i;
let avg = sum / n;
console.log('avg: ' + avg);