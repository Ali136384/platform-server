import { HomeWorkModel } from "../models/HomeWork.js";

export const createHomeWork = async (req, res) => {
  try {
    const { title, file } = req.body;
    const homeWork = await HomeWorkModel.create({
      title,
      file,
    });
    res.status(200).json({ homeWork });
  } catch (error) {
    res.status(401).json({ error });
  }
};
