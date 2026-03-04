import type { Request, Response } from "express";

import User from "@/models/user/user.js";
import HttpError from "@/helpers/httpError.js";

const { FRONTEND_URL } = process.env;

const verifyEmail = async (req: Request, res: Response) => {
  const { verificationToken } = req.params as { verificationToken: string };

  const existingUser = await User.findOne({ verificationToken });

  if (!existingUser) {
    throw new HttpError(400, "Invalid verification token or User not found");
  }

 await User.findByIdAndUpdate(existingUser._id, {
   verify: true,
   verificationToken: null,
 });

  if (FRONTEND_URL) {
    return res.redirect(301, FRONTEND_URL);
  }

  return res.json({ message: "Email verified successfully" });
};

export default verifyEmail;