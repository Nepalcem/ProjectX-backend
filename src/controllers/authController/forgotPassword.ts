import { nanoid } from "nanoid";
import type { Request, Response } from "express";
import sendPasswordResetEmail from "@/helpers/emailService/passwordService.js";
import User from "@/models/user/user.js";
import HttpError from "@/helpers/httpError.js";

const forgotPassword = async (req: Request, res: Response) => {
  const { email } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    throw new HttpError(404, "User not found");
  }

  if (!user.verified) {
    throw new HttpError(400, "Email is not verified");
  }

  const resetToken = nanoid();
  const resetTokenExpires = new Date(Date.now() + 60 * 60 * 1000);

  user.resetToken = resetToken;
  user.resetTokenExpires = resetTokenExpires;

  await user.save();

  await sendPasswordResetEmail({ email: user.email, resetToken });

  res.status(200).json({ message: "Reset password email sent" });
};

export default forgotPassword;