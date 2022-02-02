const mongoose = require("mongoose");
const config = require("config");

const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log(
      "From Cybr Click Database cybr-click-main cluster is connected successfully..."
    );
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
