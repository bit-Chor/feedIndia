var mongoose = require("mongoose");
var adminSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  username: String,
  password: String,
});
module.exports = mongoose.model("Admin", adminSchema);
