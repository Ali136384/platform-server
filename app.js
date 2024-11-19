import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/userRoutes.js";
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

export default app;
