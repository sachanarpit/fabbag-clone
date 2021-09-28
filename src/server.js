const express = require("express");

const mongoose = require("mongoose");

const connect = require("./configs/db");

//controller filelist

const userController = require(`./controller/user.controller`);

const productController = require(`./controller/product.controller`);

const app = express();

app.set("view Engine", "ejs");

app.use(express.static("/public"));

app.use(express.json());
app.use("/users", userController);
app.use("/products", productController);

// port listeing
app.listen(2349, async () => {
  await connect();
  console.log("Port 2349 is listing");
});
