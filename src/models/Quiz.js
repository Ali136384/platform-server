import mongoose from "mongoose";

const { Schema } = mongoose;

const QuizScema = new Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
});

export const QuizModel = mongoose.model("Quiz", QuizScema);
