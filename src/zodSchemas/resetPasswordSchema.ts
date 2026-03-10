import { z } from "zod";
import { passwordRegExp, emailRegExp } from "@/constants/regularExpressions.js";

const resetPasswordSchema = z.object({
  email: z
    .string({ error: "Email must be a string" })
    .regex(emailRegExp, "Invalid email format"),
  resetToken: z
    .string({ error: "Reset token must be a string" })
    .min(1, { message: "Reset token is required" }),
  newPassword: z
    .string({ error: "Password must be a string" })
    .min(8, { message: "Password must be at least 8 symbols" })
    .regex(
      passwordRegExp,
      "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one number or special character",
    ),
});

export default resetPasswordSchema;

