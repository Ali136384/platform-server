import express from "express";
import { createQuestion } from "../controllers/qa.js";
const router = express.Router();

// POST route for creating a new user
router.post("/create", createQuestion);

export default router;
