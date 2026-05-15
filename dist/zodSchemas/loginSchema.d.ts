import { z } from "zod";
declare const loginSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, z.core.$strip>;
export default loginSchema;
//# sourceMappingURL=loginSchema.d.ts.map