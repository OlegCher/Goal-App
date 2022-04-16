const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "PLease add a Name"],
    },
    email: {
      type: String,
      require: [true, "PLease add a Email"],
      unique: true,
    },
    password: {
      type: String,
      require: [true, "PLease add a Password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
