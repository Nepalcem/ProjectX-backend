import { z } from "zod";
declare const resetPasswordSchema: z.ZodObject<{
    email: z.ZodString;
    resetToken: z.ZodString;
    newPassword: z.ZodString;
}, z.core.$strip>;
export default resetPasswordSchema;
//# sourceMappingURL=resetPasswordSchema.d.ts.map