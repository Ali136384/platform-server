import express from "express";
import { createQuiz } from "../controllers/quiz.js";
const router = express.Router();

// POST route for creating a new user
router.post("/create", createQuiz);

export default router;
