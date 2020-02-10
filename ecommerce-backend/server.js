/*****************************
 *                           *
 *   Products & User Server  *
 *                           *
 *************************** */

//=================================================
//            Dependencies
//==================================================

const express = require("express");
const mongoose = require("./db/connection.js");
const cors = require("cors");
const productsController = require("./controllers/products.js");
const userController = require("./controllers/user.js");

//===================================================
// Environment Variables (getting ready for Heroku)
//===================================================

const PORT = process.env.PORT || 3000;
const db = mongoose.connection;
const app = express();
const mongoURI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/eCommerceMernCrud";

//=================================================
//                Middleware
//==================================================

app.use(cors());
app.use(express.urlencoded({ extended: false })); // extended: false - does not allow nested objects in query strings
app.use(express.json()); //use .json(), not .urlencoded()
app.use(express.static("public"));
app.use("/products", productsController);
app.use("/user", userController);

// =================================================
//          Connect to Mongo
// =================================================
mongoose.connect(
  mongoURI,
  { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
  () => console.log("MongoDB connection established:", mongoURI)
);

// =================================================
//      Error / Disconnection
// =================================================
db.on("error", err => console.log(err.message + " is Mongod not running?"));
db.on("disconnected", () => console.log("mongo disconnected"));

//=======================================================
//                  PORT 3000
//=======================================================
app.listen(PORT, () => {
  console.log(`Ascoltando alla porta, ${PORT} => I am learning Italian`);
});
