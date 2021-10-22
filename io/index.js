const fs = require("fs");

console.log("Start");

fs.readFile("test.txt", (error) => {
  setTimeout(() => {
    console.log("Timeout callback executed");
  }, 0);

  setImmediate(() => {
    console.log("Immediate callback executed");
  });

  if (!error) {
    console.log("File read");
  }
});

console.log("End");
