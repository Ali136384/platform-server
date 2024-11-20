import { CourseModel } from "../models/Course.js";

export const createCourse = async (req, res) => {
  try {
    const { name, description, image, lessons = [], tags = [] } = req.body;

    const course = await CourseModel.create({
      name,
      description,
      image,
      lessons,
      tags,
    });

    if (course) {
      res.status(201).json({
        message: "Course created successfully",
        name: name,
      });
    }
  } catch (error) {
    res.status(400).json({
      message: "Error creating Course",
      error: error.message,
    });
  }
};

export const getCourseById = async (req, res) => {
  try {
    const { id } = req.params;
    const course = await CourseModel.findById(id);

    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }

    res.status(200).json({ course });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteCourse = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedCourse = await CourseModel.findByIdAndDelete(id);

    if (deletedCourse) {
      res.status(200).json({ message: "course deleted" });
    } else {
      res.status(404).json({ message: "course not found !" });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const updateCourse = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedCourse = CourseModel.findByIdAndUpdate(id, {});
  } catch (error) {
    res.status(500).json(error);
  }
};
