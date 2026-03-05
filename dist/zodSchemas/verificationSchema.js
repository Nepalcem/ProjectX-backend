import { z } from "zod";
import { emailRegExp } from "../constants/regularExpressions.js";
const verificationSchema = z.object({
    email: z
        .string({ error: "Email must be a string" })
        .regex(emailRegExp, "Invalid email format"),
});
export default verificationSchema;
//# sourceMappingURL=verificationSchema.js.map