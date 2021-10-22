const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello, World"));

app.get("/block", (req, res) => {
  const start = Date.now();
  const end = Date.now() + 5000;
  while (Date.now() < end) {
    const doSomethingHeavyInJavaScript = 1 + 2 + 3;
  }
  const now = Date.now();
  res.send(`I am done! ${start} ${now}`);
});

app.get("/non-block", (req, res) => {
  // Imagine that setTimeout is IO operation
  // setTimeout is a native implementation, not the JS
  setTimeout(() => res.send("I am done!"), 5000);
});

app.listen(3000, () => console.log("app listening on port 3000"));
