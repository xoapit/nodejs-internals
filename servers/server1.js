const express = require("express");
const crypto = require("crypto");

const app = express();

app.get("/block-event-loop", async (_request, res) => {
  let hash = crypto.createHash("sha256");
  const numberOfHasUpdates = 10e6;

  for (let iter = 0; iter < numberOfHasUpdates; iter++) {
    hash.update(crypto.randomString());
  }
  res.send({ data: "Finished doing long task" });
});

app.listen(3000, () => console.log("app listening on port 3000"));
