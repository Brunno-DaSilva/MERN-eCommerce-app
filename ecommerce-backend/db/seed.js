const Products = require("../models/products.js");
const data = require("./seeds.json");
const mongoose = require("./connection.js");

mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

Products.deleteMany({})
  .then(() => {
    return Products.collection.insertMany(data);
  })
  .then(() => {
    process.exit();
  });
