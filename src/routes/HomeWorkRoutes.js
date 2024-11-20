import express from "express";
import { createHomeWork } from "../controllers/HomeWork.js";
const router = express.Router();

router.post("/create", createHomeWork);

export default router;
