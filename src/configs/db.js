const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://{username}:{Password}9@cluster0.swzgm.mongodb.net/fabbag_db?retryWrites=true&w=majority"
  );
};

module.exports = connect;
