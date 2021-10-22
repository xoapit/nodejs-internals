const crypto = require("crypto");
const cryptoJs = require("crypto-js");

function run(iterations) {
  const cryptoJsCaseResults = {};

  console.log(`\n
  -----------| CRYPTO-JS VERSION |-----------
  `);

  for (let i = 0; i < iterations; i++) {
    console.log(`  Iteration ${i + 1}`);
    cryptoJsCaseResults[i + 1] = { start: Date.now() };
    var key = cryptoJs.PBKDF2("secret", "salt", {
      keySize: 512 / 32,
      iterations: 100000,
      hasher: cryptoJs.algo.SHA512.create(),
    });
    cryptoJsCaseResults[i + 1].end = Date.now();
    console.log(`  Key: ${key}`);
  }

  const cryptoCaseResults = {};

  console.log(`\n
  -----------| CRYPTO VERSION |-----------
  `);

  for (let i = 0; i < iterations; i++) {
    cryptoCaseResults[i + 1] = { start: Date.now() };

    crypto.pbkdf2("secret", "salt", 100000, 64, "sha512", (err, derivedKey) => {
      if (err) {
        throw err;
      }

      console.log(`  Iteration ${i + 1}`);
      console.log(`  Key: ${derivedKey.toString("hex")}`);
      cryptoCaseResults[i + 1].end = Date.now();
    });
  }

  setTimeout(() => {
    console.log(`\n
  -----------| RESULT |-----------
  `);

    console.log(`  CASE 1: Crypto-js version`);
    printIterationTimestamps(cryptoJsCaseResults);

    console.log(`\n  CASE 2: Crypto version`);
    printIterationTimestamps(cryptoCaseResults);
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