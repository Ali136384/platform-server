import { LessonModel } from "../models/Lesson.js";

export const createLesson = async (req, res) => {
  try {
    const { name, description, image, video } = req.body;

    const lesson = await LessonModel.create({
      name,
      description,
      image,
      video,
    });

    if (lesson) {
      res.status(201).json({
        message: "lesson created successfully",
        name: name,
      });
    }
  } catch (error) {
    res.status(400).json({
      message: "Error creating lesson",
      error: error.message,
    });
  }
};

export const getlessonById = async () => {
  try {
    const { id } = req.params;
    // const lesson = await
  } catch (error) {
    res.status(401).json({ error });
  }
};
