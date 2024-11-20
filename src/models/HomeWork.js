import mongoose from "mongoose";

const { Schema } = mongoose;

const HomeWorkSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  file: {
    type: String,
    required: true,
  },
});

export const HomeWorkModel = mongoose.model("HomeWork", HomeWorkSchema);
