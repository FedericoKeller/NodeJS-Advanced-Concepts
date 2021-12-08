const crypto = require("crypto");
const express = require("express");
const app = express();
const { Worker } = require("worker_threads");

app.get("/", (req, res) => {
  const worker = new Worker("./workerExample.js");

  worker.once("message", (result) => {
    res.send(result.data.toString());
  });
});

app.get("/fast", (req, res) => {
  res.send("Hi was fast!");
});

app.listen(3000);
