import mongoose from "mongoose";

const { Schema } = mongoose;

const QASchema = new Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
});

export const QAModel = mongoose.model("QA", QASchema);
