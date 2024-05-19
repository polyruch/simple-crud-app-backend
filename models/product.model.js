const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter a pruduct name"],
  },
  quantity: {
    type: Number,
    required: [true, "Please enter a quantity"],
  },
  price: {
    type: Number,
    required: [true, "Please enter a price"],
    default: 0,
  },
  Image: {
    type: String,
    required: [false, "Please enter a image"],
  },
});

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
