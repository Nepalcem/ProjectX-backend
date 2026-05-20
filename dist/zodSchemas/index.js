import registerSchema from "./registerSchema.js";
import verificationSchema from "./verificationSchema.js";
import resetPasswordSchema from "./resetPasswordSchema.js";
import loginSchema from "./loginSchema.js";
import createCharacterSchema from "./createCharacterSchema.js";
const zodSchemas = {
    register: registerSchema,
    verifyEmail: verificationSchema,
    resetPassword: resetPasswordSchema,
    login: loginSchema,
    createCharacter: createCharacterSchema,
};
export default zodSchemas;
//# sourceMappingURL=index.js.map