import { UserModel } from "../models/User.js";
import bcrypt from "bcrypt";

export const createUser = async (req, res) => {
  try {
    const { username, password, email, name, surname, gender } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const new_user = await UserModel.create({
      username,
      password: hashedPassword,
      email,
      name,
      surname,
      gender,
    });

    if (new_user) {
      res.status(201).json({
        message: "User created successfully",
        userName: username,
      });
    }
  } catch (error) {
    res.status(400).json({
      message: "Error creating user",
      error: error.message,
    });
  }
};
