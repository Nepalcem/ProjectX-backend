declare const zodSchemas: {
    register: import("zod").ZodObject<{
        email: import("zod").ZodString;
        password: import("zod").ZodString;
        token: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
    }, import("zod/v4/core").$strip>;
    verifyEmail: import("zod").ZodObject<{
        email: import("zod").ZodString;
    }, import("zod/v4/core").$strip>;
    resetPassword: import("zod").ZodObject<{
        email: import("zod").ZodString;
        resetToken: import("zod").ZodString;
        newPassword: import("zod").ZodString;
    }, import("zod/v4/core").$strip>;
    login: import("zod").ZodObject<{
        email: import("zod").ZodString;
        password: import("zod").ZodString;
    }, import("zod/v4/core").$strip>;
    createCharacter: import("zod").ZodObject<{
        nickname: import("zod").ZodString;
        race: import("zod").ZodEnum<{
            human: "human";
            elf: "elf";
            dwarf: "dwarf";
            orc: "orc";
        }>;
    }, import("zod/v4/core").$strip>;
};
export default zodSchemas;
//# sourceMappingURL=index.d.ts.map