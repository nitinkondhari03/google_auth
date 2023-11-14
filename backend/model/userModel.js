const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, min: 3, max: 20 },
  email: { type: String, required: true, unique: true, max: 50 },
  password: { type: String, required: true, min: 8 },
});

const Users = mongoose.model("User", UserSchema);

module.exports = { Users };
