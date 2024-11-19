import { UserModel } from "../models/User.js";

export const createUser = async (req, res) => {
  try {
    const { username, password, email, name, surname } = req.body;

    const new_user = await UserModel.create({
      username,
      password,
      email,
      name,
      surname,
    });

    if (new_user) {
      res.status(201).json({
        message: "User created successfully",
        user: new_user,
      });
    }
  } catch (error) {
    res.status(400).json({
      message: "Error creating user",
      error: error.message,
    });
  }
};
