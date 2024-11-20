import express from "express";
import { createLesson } from "../controllers/lesson.js";
const router = express.Router();

// POST route for creating a new user
router.post("/create", createLesson);

export default router;
