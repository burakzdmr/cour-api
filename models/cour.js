const mongoose = require("mongoose");

const CourSchema = new mongoose.Schema({
  courId: { type: String, required: true },
  description: { type: String },
  name: { type: String },
  date: { type: Date },
  start: { type: String },
  end: { type: String },
  image: { type: String },
});

module.exports = mongoose.model("Cour", CourSchema);
