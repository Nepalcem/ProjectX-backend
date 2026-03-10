import bcrypt from "bcrypt";
import type { Request, Response } from "express";

import User from "@/models/user/user.js";
import HttpError from "@/helpers/httpError.js";

const resetPassword = async (req: Request, res: Response) => {
  const { email, resetToken, newPassword } = req.body as {
    email: string;
    resetToken: string;
    newPassword: string;
  };

  const user = await User.findOne({ email });

  if (!user || user.resetToken !== resetToken) {
    throw new HttpError(400, "Invalid or expired reset token");
  }

  if (!user.resetTokenExpires || user.resetTokenExpires < new Date()) {
    throw new HttpError(400, "Invalid or expired reset token");
  }

  const hashedPassword = await bcrypt.hash(newPassword, 10);

  user.password = hashedPassword;
  user.resetToken = null;
  user.resetTokenExpires = null;

  await user.save();

  res.status(200).json({ message: "Password has been reset successfully" });
};

export default resetPassword;

