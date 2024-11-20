import express from "express";
import { createUser } from "../controllers/user.js";
const router = express.Router();

// POST route for creating a new user
router.post("/create", createUser);

export default router;
