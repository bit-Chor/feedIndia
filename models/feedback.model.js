var mongoose = require("mongoose");
var feedbackSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  suggestions: String,
});
module.exports = mongoose.model("Feedback", feedbackSchema);
