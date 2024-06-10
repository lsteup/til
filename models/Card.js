const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CardSchema = new Schema({
  title: { type: String, required: true },
  latestReview: { type: Date },
  reviewCount: { type: Number },
  resources: { type: [String] },
  content: { type: String, required: true },
  course: { type: [String] },
  theme: { type: String },
  nextReview: { type: Date },
  level: { type: Number, default: 0 },
});

module.exports = mongoose.model("Card", CardSchema);
