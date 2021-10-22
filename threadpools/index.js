const crypto = require("crypto");

const begin = process.hrtime();

for (let i = 0; i < 4; i++) {
  const start = process.hrtime(begin);
  crypto.pbkdf2("secret", "salt", 100000, 64, "sha512", (err, derivedKey) => {
    if (err) {
      throw err;
    }
    const end = process.hrtime(begin);
    const startTime = start[0] * 1000 + start[1] / 1e6;
    const endTime = end[0] * 1e3 + end[1] / 1e6;
    console.log(
      `Crypto ${i} - start ${startTime} end ${endTime} execute  ${
        endTime - startTime
      }`
    );
  });
}
