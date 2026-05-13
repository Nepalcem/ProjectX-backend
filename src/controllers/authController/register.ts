import { nanoid } from "nanoid";
import bcrypt from "bcrypt";
import type { Request, Response } from "express";

import User from "@/models/user/user.js";
import HttpError from "@/helpers/httpError.js";

import { sendVerificationEmail } from "@/helpers/emailService/emailService.js";
import { validationResult } from "express-validator";

const register = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new HttpError(400, "Invalid input");
  }

  const { email, password } = req.body;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new HttpError(409, "Email already in use");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const verificationToken = nanoid();
  const verificationTokenExpires = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours

  await User.create({
    email,
    password: hashedPassword,
    verificationToken,
    verificationTokenExpires,
  });

  await sendVerificationEmail({
    to: email,
    verificationToken,
  });

  res.status(201).json({
    message: "Registered! Please verify your email",
  });
};

export default register;
