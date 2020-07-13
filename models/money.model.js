var mongoose = require("mongoose");
var moneySchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  mobile: String,
  address: String,
  city: String,
  state: String,
  zip: String,
  country: String,
  company: String,
  email: String,
  amount: String,
});
module.exports = mongoose.model("Money", moneySchema);
