const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    inCompetition: {
      type: Boolean,
      default: false,
    },
    googleId: { type: String },
    resetLink: {
      data: String,
      default: ""
    },
    balance: {
      type: Number,
      default: 0,
    },
    allbalance: {
      type: Number,
      default: 0,
    },
    monthbalance: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
