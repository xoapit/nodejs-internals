const fs = require("fs");

console.time("readFileSync");

const init = Date.now();

for (let x = 0; x < 1000; x++) {
  const start = Date.now();
  const largeFile = fs.readFileSync("./img.jpg");
  const end = Date.now();
  console.log(
    `File size#${x}: ${Math.round(largeFile.length / 1e6)} MB from ${
      start - init
    } to ${end - init} in ${end - start}`
  );
}

const data = fs.readFileSync("./file.txt", "utf-8"); // blocks here until file is read
console.log("file.txt data: ", data.trim());

console.timeEnd("readFileSync");
