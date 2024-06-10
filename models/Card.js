const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CardSchema = new Schema({
  title: { type: String, required: true },
  latestReview: { type: Date },
  reviewCount: { type: Number },
  resources: { type: [String] },
  content: { type: String, required: true },
  course: { type: mongoose.Types.ObjectedId, ref: "Course", required: true },
  //theme: { type: String },
  nextReview: { type: Date },
  level: { type: Number, default: 1, max: 10 },
  //children nodes
  due: { type: Boolean, default: false },
});

module.exports = mongoose.model("Card", CardSchema);
