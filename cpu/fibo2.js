const http = require("http");
const workerpool = require("workerpool");

// create a worker pool using an external worker script
const pool = workerpool.pool(__dirname + "/workers.js");

const server = http.createServer(async (req, res) => {
  "use strict";
  if (req.url == "/fibo") {
    let num = parseInt(req.headers.fibo);
    console.log(num);

    try {
      const result = await pool.exec("fibonacci", [10]);
      console.log("Result: " + result); // outputs 55
      return res.end(`${result}`);
    } catch (err) {
      console.error(err);
      return res.end(`Error: ${err}`);
    } finally {
      pool.terminate(); // terminate all workers when done
    }
  } else {
    res.end("hello world");
  }
});

server.listen(8000, () => console.log("running on port 8000"));
