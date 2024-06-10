const express = require("express");
const router = express.Router();

const {
  getCourse,
  updateCourse,
  deleteCourse,
  getCourses,
  createCourse,
} = require("../controllers/courseController");

router.route("/").get(getCourses).post(createCourse);
router.route("/:id").get(getCourse).post(updateCourse).deleteCourse;

module.exports = router;
