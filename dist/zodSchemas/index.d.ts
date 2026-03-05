declare const zodSchemas: {
    register: import("zod").ZodObject<{
        email: import("zod").ZodString;
        password: import("zod").ZodString;
        token: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
    }, import("zod/v4/core").$strip>;
    verifyEmail: import("zod").ZodObject<{
        email: import("zod").ZodString;
    }, import("zod/v4/core").$strip>;
};
export default zodSchemas;
//# sourceMappingURL=index.d.ts.map