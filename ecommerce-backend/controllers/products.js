/*****************************
 *                           *
 *   Products Controllers    *
 *                           *
 *************************** */

const express = require("express");
const router = express.Router();
const Products = require("../models/products.js");

//======================
//         Read
//======================
router.get("/", (req, res) => {
  Products.find({}, (err, foundProducts) => {
    res.json(foundProducts);
  });
});

//======================
//       Create
//======================
router.post("/", (req, res) => {
  Products.create(req.body, (err, createdProduct) => {
    res.json(createdProduct);
  });

  // const title = req.body.title;
  // const img = req.body.img;
  // const price = Number(req.body.price);
  // const company = req.body.company;
  // const info = req.body.info;
  // const inCart = req.body.inCart;
  // const count = Number(req.body.count);
  // const total = Number(req.body.total);
  // const category = req.body.category;
  // const date = Date.parse(req.body.date);

  // const newProduct = new Product({
  // //   title,
  // //   img,
  // //   price,
  // //   company,
  // //   info,
  // //   inCart,
  // //   count,
  // //   total,
  // //   category,
  // //   date
  // // });

  // // newProduct
  // //   .save()
  // //   .then(() => res.json("Product Added!"))
  // //   .catch(err => res.status(400).json("Error: " + err));
});

//======================
//       Delete
//======================
router.delete("/:id", (req, res) => {
  Products.findByIdAndRemove(req.params.id, (err, deletedProduct) => {
    res.json(deletedProduct);
  });
});

//======================
//       Update
//======================
router.put("/:id", (req, res) => {
  Products.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedProduct) => {
      if (err) {
        res.send(err.message);
      } else {
        res.json(updatedProduct);
      }
    }
  );
});

module.exports = router;
