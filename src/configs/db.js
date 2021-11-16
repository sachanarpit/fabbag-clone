const mongoose = require("mongoose");
require("dotenv").config();

const connect = () => {
  return mongoose.connect(
    `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.swzgm.mongodb.net/fabbag_db?retryWrites=true&w=majority`
  );
};

module.exports = connect;
