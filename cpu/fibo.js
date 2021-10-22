const http = require("http");

function fibo(n) {
  if (n < 2) return 1;
  else return fibo(n - 2) + fibo(n - 1);
}

const server = http.createServer((req, res) => {
  "use strict";
  if (req.url == "/fibo") {
    let num = parseInt(req.headers.fibo);
    console.log(num);
    res.end(`${fibo(num)}`);
  } else {
    res.end("hello world");
  }
});

server.listen(7000, () => console.log("running on port 7000"));
