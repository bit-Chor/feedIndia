var mongoose = require("mongoose");
var userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  username: String,
  password: String,
});
module.exports = mongoose.model("User", userSchema);
