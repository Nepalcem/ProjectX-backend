import { nanoid } from "nanoid";
import bcrypt from "bcrypt";
import type { Request, Response } from "express";
import User from "@/models/user/user.js";
import sendVerificationEmail from "@/helpers/emailService.js";
import HttpError from "@/helpers/httpError.js";

const { BASE_URL } = process.env;

const register = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new HttpError(409, "Email already in use");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const verificationToken = nanoid();

  await User.create({
    email,
    password: hashedPassword,
    verificationToken,
  });

  const verifyEmail = {
    to: email,
    subject: "Verify email for ProjectX account",
    html: `<a href='${BASE_URL}/auth/verify/${verificationToken}'>Click to verify your email</a>`,
  };

  await sendVerificationEmail(verifyEmail);

  res.status(201).json({
    message: "Please verify your email",
  });
};

export default register;
