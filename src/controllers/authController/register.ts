import { nanoid } from "nanoid";
import bcrypt from "bcrypt";

const register = async (req, res) => {
  res.status(201).json({
    message: "User registered successfully",
  });
};

export default register;
