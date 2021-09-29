const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    id: { type: Number },
    name: { type: String },
    email: { type: String, required: true },
    password: { type: String, required: true },
    mobile: {
      type: Number,
      min: 1000000000,
      max: 9999999999,
      unique: true,
    },
    adress: {
      houseNo: { type: String },
      city: { type: String },
      pincode: { type: Number, min: 100000, max: 999999 },
    },
    cart: [
      {
        price: { type: Number },
        quantity: { type: Number },
        product_id: { type: String },
      },
    ],
    order: [
      {
        price: { type: Number },
        quantity: { type: Number },
        product_id: { type: String },
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const User = mongoose.model("user", userSchema);

module.exports = User;
