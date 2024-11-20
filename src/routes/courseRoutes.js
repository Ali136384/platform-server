import express from "express";
import {
  createCourse,
  deleteCourse,
  getCourseById,
} from "../controllers/course.js";
const router = express.Router();

router.post("/create", createCourse);

router.get("/get/:id", getCourseById);

router.delete("/delete/:id", deleteCourse);

export default router;
