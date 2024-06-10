const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CourseSchema = new Schema({
  title: { type: String, required: true },
  cards: {
    type: [{ type: mongoose.Types.ObjectId, ref: "Card" }],
    default: [],
  },
});

module.exports = mongoose.model("Course", CourseSchema);
