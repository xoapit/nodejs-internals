const fs = require("fs");

function run(iterations) {
  const asyncCaseResults = {};

  console.log(`\n
  -----------| ASYNC VERSION |-----------
  `);

  for (let i = 0; i < iterations; i++) {
    asyncCaseResults[i + 1] = { start: Date.now() };

    fs.readFile("../img_10mb.jpg", (err, data) => {
      if (err) {
        throw err;
      }

      asyncCaseResults[i + 1].end = Date.now();
      // console.log(`  Iteration ${i + 1}`);
      fs.close();
    });
  }

  setTimeout(() => {
    console.log(`\n
  -----------| RESULT |-----------
  `);

    console.log(`\n  CASE 2: Async version`);
    printIterationTimestamps(asyncCaseResults);
    console.log("\n");
  }, 5000);
}

function printIterationTimestamps(result) {
  let ref = null;
  Object.keys(result).forEach((key) => {
    if (key === "1") {
      ref = result[key].start;
    }

    const start = key === "1" ? 0 : result[key].start - ref;
    const end = result[key].end - ref;

    console.log(`  Iteration ${key} started at ${start} and ended at ${end}`);
  });
}

if (process.argv && process.argv.length !== 3) {
  throw new Error("Invalid args provided (Expected number of iterations)");
} else {
  run(parseInt(process.argv[2], 10));
}
