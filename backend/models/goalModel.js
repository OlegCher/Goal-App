const mongoose = require("mongoose");

const goalSchema = mongoose.Schema(
  {
    text: {
      type: String,
      require: [true, "PLease add a text"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("goal", goalSchema);
