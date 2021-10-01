const express = require("express");

const router = express.Router();
const Order = require("../models/order.model");

router.post("", async (req, res) => {
  const order = await Order.create(req.body);
  return res.status(201).send(order);
});

router.get("", async (req, res) => {
  const order = await Order.find().lean().exec();
  return res.status(200).send({ order });

  //   return res.render("users.ejs", {
  //     user: user,
  //   });
});

// router.get("/search/:name", (req, res) => {
//   let regex = new RegExp(req.params.name, "i");
//   order.find({ name: regex })
//     .limit(5)
//     .then((result) => {
//       return res.status(200).json(result);
//     });
// });

// router.get("/:id", async (req, res) => {
//   const order = await Product.findById(req.params.id).lean().exec();
//   //   return res.status(200).send({ user });

//   return res.render("product.ejs", {
//     product: product,
//   });
// });

// router.get("/json/:id", async (req, res) => {
//   const product = await Product.findById(req.params.id).lean().exec();
//   return res.status(200).send({ product });
// });
module.exports = router;
