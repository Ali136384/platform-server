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

export const getCourseById = async () => {
  try {
    const { id } = req.params;
    // const lesson = await
  } catch (error) {
    res.status(401).json({ error });
  }
};
