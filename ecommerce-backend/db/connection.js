const mongoose = require("mongoose");
const mongoURI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/eCommerceMernCrud";

mongoose.connect(
  mongoURI,
  ({
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
  },
  () => console.log("MongoDB connection established:", mongoURI))
);

module.exports = mongoose;
