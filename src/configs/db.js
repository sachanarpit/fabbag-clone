const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://arpit:Anju2359@cluster0.swzgm.mongodb.net/fabbag_database?retryWrites=true&w=majority"
  );
};

module.exports = connect;
