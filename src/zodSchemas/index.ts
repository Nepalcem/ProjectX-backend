import registerSchema from "./registerSchema.js";
import verificationSchema from "./verificationSchema.js";
import resetPasswordSchema from "./resetPasswordSchema.js";

const zodSchemas = {
  register: registerSchema,
  verifyEmail: verificationSchema,
  resetPassword: resetPasswordSchema,
};

export default zodSchemas;