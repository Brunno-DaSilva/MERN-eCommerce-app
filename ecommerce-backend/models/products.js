/*****************************
 *                           *
 *     Products Model        *
 *                           *
 *************************** */

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    img: { type: String, required: true },
    price: { type: Number, required: true },
    company: { type: String, required: true },
    info: { type: String, required: true },
    inCart: { type: Boolean, required: true },
    count: { type: Number, required: true },
    total: { type: Number, required: true },
    date: { type: Date, default: Date.now, required: true }
  },
  {
    timestamps: true
  }
);

const Products = mongoose.model("Product", productSchema);

module.exports = Products;
