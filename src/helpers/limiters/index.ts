import { registerLimiter } from "./registerLimiter.js";
import { verificationLimiter } from "./verificationLimiter.js";
import { forgotPasswordLimiter } from "./forgotPasswordLimiter.js";
import { loginLimiter } from "./loginLimiter.js";

const requestLimiters = {
    register: registerLimiter,
    verification: verificationLimiter,
    forgotPassword: forgotPasswordLimiter,
    login: loginLimiter,
}

export default requestLimiters;