import { z } from "zod";
declare const registerSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
    token: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export default registerSchema;
//# sourceMappingURL=registerSchema.d.ts.map