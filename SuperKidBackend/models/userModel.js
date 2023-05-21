const mongoose = require("mongoose");

const userModel = mongoose.Schema(
  {
    fullName: { type: String, required: true },
    phoneNo: { type: Number, required: true },
    email: { type: String, required: true },
    age: { type: String, required: true },
    payment: {
      type: Object,
      properties: {
        success: {
          type: Boolean,
        },
        amount: {
          type: Number,
        },
      },
    },
  },
  {
    timestamps: true,
  }
);

const Registration = mongoose.model("register", userModel);

module.exports = Registration;
