import mongoose from "mongoose";

const { Schema } = mongoose;

const CourseSchema = new Schema({
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
  lessons: {
    required: true,
    type: [String],
  },
  tags: {
    required: true,
    type: [String],
  },
});

export const CourseModel = mongoose.model("Course", CourseSchema);
