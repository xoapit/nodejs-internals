const http = require("http");
const workerpool = require("workerpool");

// create a worker pool using an external worker script
const pool = workerpool.pool(__dirname + "/workers.js");

const server = http.createServer(async (req, res) => {
  "use strict";
  if (req.url == "/heavy") {
    try {
      const n = 100000000;
      const result = await pool.exec("calculateTotal", [n]);
      console.log("Result: " + result);
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
