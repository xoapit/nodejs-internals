const fs = require("fs");

console.log("Start");

fs.readFile("../test.txt", (err) => {
  if (err) {
    console.log(err);
    throw err;
  }

  setTimeout(() => {
    console.log(`Timeout callback executed`);
  }, 0);

  setImmediate(() => {
    console.log(`Immediate callback executed`);
  }, 0);
});

console.log("End");
