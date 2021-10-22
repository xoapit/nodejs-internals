const express = require("express");
const bodyParser = require("body-parser");
const { createLogger, format, transports } = require("winston");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const { timestamp, colorize, printf, combine } = format;
const timeFormat = timestamp({ format: "YYYY-MM-DD HH:mm:ss" });
const msgFormat = printf((info) => {
  return `${info.timestamp} ${info.level}: ${info.message}`;
});

const logger = createLogger({
  level: "info",
  format: format.combine(format.colorize({ all: true }), format.simple()),
  transports: [
    new transports.Console({
      format: combine(timeFormat, msgFormat, colorize({ all: true })),
    }),
    new transports.File({
      filename: `${new Date().toJSON().slice(0, 10).replace(/-/g, "-")}.log`,
      format: combine(timeFormat, msgFormat),
    }),
  ],
});

app.get("/", (req, res, next) => {
  logger.log("info", `Route ${req.url}`, "hello");
  res.send("hello");
});

app.get("/foo", (req, res, next) => {
  try {
    throw new Error("error");
    res.send("hello");
  } catch (err) {
    logger.log("error", `Route ${req.url}`, "foo");
    next(err);
  }
});

app.use((err, req, res, next) => {
  res.send("error occurred");
});

app.listen(3000, () => console.log("server started"));
