const http = require("http");

function calculateTotal(n) {
  let total = 0;
  for (let i = 0; i < n; i++) {
    total += i;
  }
  return total;
}

const server = http.createServer((req, res) => {
  "use strict";
  if (req.url == "/heavy") {
    const n = 100000000;
    res.end(`${calculateTotal(n)}`);
  } else {
    console.log(req.headers);
    res.end("hello world");
  }
});

server.listen(7000, () => console.log("running on port 7000"));
