const express = require("express");

const mongoose = require("mongoose");

const connect = require("./configs/db");

//controller filelist

const userController = require(`./controller/user.controller`);

const productController = require(`./controller/product.controller`);

const orderController = require(`./controller/order.controller`);

const app = express();

app.set("view Engine", "ejs");

app.use(express.static("public"));

app.use(express.json());
app.use("/users", userController);
app.use("/products", productController);
app.use("/orders", orderController);

// all page redirection
//home pager
app.get("", async (req, res) => {
  return res.render("home.ejs");
});
app.get("/cart", async (req, res) => {
  return res.render("cart.ejs");
});
app.get("/login", async (req, res) => {
  return res.render("login.ejs");
});
app.get("/register", async (req, res) => {
  return res.render("register.ejs");
});
app.get("/checkout", async (req, res) => {
  return res.render("checkout.ejs");
});
app.get("/thankyou", async (req, res) => {
  return res.render("thankyou.ejs");
});
// port listeing
// app.listen(2349, async () => {
//   await connect();
//   console.log("Port 2349 is listing");
// });

const start = async () => {
  await connect();
  app.listen(2349, () => {
    console.log("listing to port 2349");
  });
};

module.exports = start;