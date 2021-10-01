const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userId: { type: String },
    name: { type: String },
    email: { type: String, required: true },
    mobile: {
      type: Number,
      min: 1000000000,
      max: 9999999999,
      unique: true,
    },
    adress: {
      houseNo: { type: String },
      state: { type: String },
      city: { type: String },
      pincode: { type: Number, min: 100000, max: 999999 },
    },
    order_id: { type: String },
    payment_id: { type: String },
    signature: { type: String },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Product = mongoose.model("orders", orderSchema);

module.exports = Product;
