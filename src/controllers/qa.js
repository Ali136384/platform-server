import { QAModel } from "../models/QA.js";

export const createQuestion = async (req, res) => {
  try {
    const { question, answer } = req.body;

    const Question = await QAModel.create({
      question,
      answer,
    });

    if (Question) {
      res.status(201).json({
        message: "Question created successfully",
        question,
      });
    }
  } catch (error) {
    res.status(400).json({
      message: "Error creating Question",
      error: error.message,
    });
  }
};

export const getQuestionById = async () => {
  try {
    const { id } = req.params;
    // const lesson = await
  } catch (error) {
    res.status(401).json({ error });
  }
};
