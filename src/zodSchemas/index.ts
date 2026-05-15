import registerSchema from "./registerSchema.js";
import verificationSchema from "./verificationSchema.js";
import resetPasswordSchema from "./resetPasswordSchema.js";
import loginSchema from "./loginSchema.js";

const zodSchemas = {
  register: registerSchema,
  verifyEmail: verificationSchema,
  resetPassword: resetPasswordSchema,
  login: loginSchema,
};

export default zodSchemas;