const fs = require("fs");

const init = Date.now();
console.time("readFile");

for (let x = 0; x < 4; x++) {
  const start = Date.now();
  fs.readFile("./1GB.bin", (err, data) => {
    const end = Date.now();
    if (err) throw err;
    console.log(
      `File size#${x}: ${Math.round(data.length / 1e6)} MB from ${
        start - init
      } to ${end - init} in ${end - start}`
    );
  });
}

fs.readFile("./file.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log("file.txt data: ", data.trim());
});

console.timeEnd("readFile");
