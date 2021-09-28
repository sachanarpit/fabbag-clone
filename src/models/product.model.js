const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true },
    brand: { type: String, required: false },
    name: { type: String, required: true },
    price: { type: Number },
    price_sign: { type: String, required: false },
    currency: { type: String, required: false },
    image_link: { type: String, required: false },
    product_link: { type: String, required: false },
    website_link: { type: String, required: false },
    description: { type: String, required: false },
    rating: { type: String, required: false },
    category: { type: String, required: false },
    product_type: { type: String, required: false },
    api_featured_image: { type: String, required: false },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Product = mongoose.model("products", productSchema);

module.exports = Product;
