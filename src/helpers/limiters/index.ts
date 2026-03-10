import { registerLimiter } from "./registerLimiter.js";
import { verificationLimiter } from "./verificationLimiter.js";
import { forgotPasswordLimiter } from "./forgotPasswordLimiter.js";

const requestLimiters = {
    register: registerLimiter,
    verification: verificationLimiter,
    forgotPassword: forgotPasswordLimiter,
}

export default requestLimiters;