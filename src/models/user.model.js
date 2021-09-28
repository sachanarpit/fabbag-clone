const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    mobile: {
      type: Number,
      required: true,
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
        name: { type: String },
        imgSrc: { type: String },
        price: { type: Number },
        quantity: { type: Number },
      },
    ],
    order: [
      {
        name: { type: String },
        imgSrc: { type: String },
        price: { type: Number },
        quantity: { type: Number },
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
