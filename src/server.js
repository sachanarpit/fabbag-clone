const express = require("express");

const mongoose = require("mongoose");

const connect = require("./configs/db");

const app = express();

// app.set("view Engine", "ejs");

// app.use(express.static("/public"));

// app.use(express.json());

// port listeing
app.listen(2349, async () => {
  await connect();
  console.log("Port 2349 is listing");
});
