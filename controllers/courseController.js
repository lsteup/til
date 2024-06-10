const Course = require("../models/Course");

//get course
const getCourse = async (req, res) => {
  const courseId = req.params.id;
  const course = await Course.findOne({
    _id: courseId,
  });

  res.json({ course });
};

//get courses
const getCourses = async (req, res) => {
  const courses = await Course.find({});
  res.json({ courses });
};

//create course
const createCourse = async (req, res) => {
  const course = await Course.create(req.body);
  res.json({ course });
};

//update course
const updateCourse = async (req, res) => {
  const courseId = req.params.id;

  const course = await Course.findOneAndUpdate(
    {
      _id: courseId,
    },
    { $set: req.body }
  );

  res.json({ course });
};

//delete course
const deleteCourse = async (req, res) => {
  const courseId = req.params.id;

  const course = await Course.findOneAndDelete({
    _id: courseId,
  });

  res.send("deleted course");
};
