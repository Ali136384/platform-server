import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/userRoutes.js";
import courseRouter from "./routes/courseRoutes.js";
import lessonsRoutes from "./routes/lessonsRoutes.js";
const app = express();
app.use(express.json());
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(`${process.env.DB_URL}`)
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log("db connection error", err);
  });

app.use("/api/users", userRouter);

app.use("/api/courses", courseRouter);

app.use("/api/lessons", lessonsRoutes);

export default app;
