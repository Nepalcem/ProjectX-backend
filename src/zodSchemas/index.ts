import registerSchema from "./registerSchema.js";
import verificationSchema from "./verificationSchema.js";

const zodSchemas = {
    register: registerSchema,
    verifyEmail: verificationSchema
}

export default zodSchemas;