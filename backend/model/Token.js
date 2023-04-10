const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tokenSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  verifyToken: String,
});

module.exports = mongoose.model("Token", tokenSchema);
