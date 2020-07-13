var mongoose = require("mongoose");
var items = new mongoose.Schema({ type: String, qty: String });
var foodSchema = new mongoose.Schema({
  name: String,
  food: [items],
  location: String,
  date: String,
  time: String,
  number: String,
});
module.exports = mongoose.model("Food", foodSchema);
