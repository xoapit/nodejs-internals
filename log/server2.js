const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const app = express();
const axios = require("axios");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
  logger.log("info", `Route ${req.url}`, "hello");
  res.send("hello");
});

const downloadImage = async () => {
  const url =
    "https://datahouse.asia/wp-content/uploads/2020/06/Datahouse-white2.png";
  const response = await axios.get(url);

  return response?.data;
};

const downloadService = async () => {
  return await downloadImage();
};

app.get("/image", async (req, res, next) => {
  try {
    const data = await downloadService();
    res.send(data);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

app.use((err, req, res, next) => {
  res.send("error occurred");
});

app.listen(3000, () => console.log("server started"));
