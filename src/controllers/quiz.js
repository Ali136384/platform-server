import { QuizModel } from "../models/Quiz.js";
export const createQuiz = async (req, res) => {
  try {
    const { question, answer } = req.body;

    const Question = await QuizModel.create({
      question,
      answer,
    });

    if (Question) {
      res.status(201).json({
        message: "Quiz created successfully",
        question,
      });
    }
  } catch (error) {
    res.status(400).json({
      message: "Error creating Quiz",
      error: error.message,
    });
  }
};

// export const getQuestionById = async () => {
//   try {
//     const { id } = req.params;
//     // const lesson = await
//   } catch (error) {
//     res.status(401).json({ error });
//   }
// };
