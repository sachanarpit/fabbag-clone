const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://arpit:Anju@?2359@cluster0.swzgm.mongodb.net/fabbag?retryWrites=true&w=majority"
  );
};

module.exports = connect;
