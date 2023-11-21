const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    password: {
      type: String,
      require: true,
      min: 5,
      max: 128,
    },
    fullName: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    hp: {
        type: Number,
        required: true,
        default: 1000,
    },
    level: {
        type: Number,
        required: true,
        default: 1,
    },
    exp: {
        type: Number,
        required: true,
        default: 1,
    },
    isAdmin: {
      type: Boolean,
      default: false,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);