import { z } from "zod";
import { passwordRegExp, emailRegExp } from "../constants/regularExpressions.js";
const registerSchema = z.object({
    email: z
        .string({ error: "Email must be a string" })
        .regex(emailRegExp, "Invalid email format"),
    password: z
        .string({ error: "Password must be a string" })
        .min(8, { error: "Password must be at least 8 symbols" })
        .regex(passwordRegExp, "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one number or special character"),
    token: z
        .string({ error: "Token must be a string" })
        .nullable()
        .default(null),
});
export default registerSchema;
//# sourceMappingURL=registerSchema.js.map