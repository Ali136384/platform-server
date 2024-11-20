import express from "express";
import { createCourse } from "../controllers/course.js";
const router = express.Router();

// POST route for creating a new user
router.post("/create", createCourse);

export default router;
