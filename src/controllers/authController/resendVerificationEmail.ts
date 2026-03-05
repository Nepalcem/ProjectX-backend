import User from "@/models/user/user.js";
import HttpError from "@/helpers/httpError.js";
import { sendVerificationEmail } from "@/helpers/emailService/emailService.js";
import type { Request, Response } from "express";
import { nanoid } from "nanoid";

const resendVerificationEmail = async (req: Request, res: Response) => {
  const { email } = req.body as { email: string };

  if (!email) {
    throw new HttpError(400, "Email is required");
  }

  const user = await User.findOne({ email });

  if (!user) {
    return res.json({ message: "User not found" });
  }

  if (user.verified) {
    return res.json({ message: "Email is already verified" });
  }

  if (user && !user.verified) {
    if (
      !user.verificationTokenExpires ||
      user.verificationTokenExpires < new Date()
    ) {
      user.verificationToken = nanoid();
      user.verificationTokenExpires = new Date(
        Date.now() + 24 * 60 * 60 * 1000,
      );
      await user.save();
    }

    await sendVerificationEmail({
      to: user.email,
      verificationToken: user.verificationToken!,
    });
  }

  res.json({ message: "If the email exists, a verification email was sent" });
};

export default resendVerificationEmail;
