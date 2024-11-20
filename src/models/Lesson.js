import mongoose from "mongoose";

const { Schema } = mongoose;

const LessonSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  video: {
    type: String,
    required: true,
  },
});

export const LessonModel = mongoose.model("Lesson", LessonSchema);
