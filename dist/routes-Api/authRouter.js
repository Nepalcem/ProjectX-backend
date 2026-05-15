import express from "express";
import authControllers from "../controllers/authController/index.js";
import validateBody from "../middlewares/validateBody.js";
import zodSchemas from "../zodSchemas/index.js";
import requestLimiters from "../helpers/limiters/index.js";
import authenticate from "../middlewares/authenticate.js";
const router = express.Router();
router.post("/register", requestLimiters.register, validateBody(zodSchemas.register), authControllers.register);
router.post("/resend-verification-email", requestLimiters.verification, validateBody(zodSchemas.verifyEmail), authControllers.resendVerificationEmail);
router.post("/forgot-password", requestLimiters.forgotPassword, validateBody(zodSchemas.verifyEmail), authControllers.forgotPassword);
router.post("/reset-password", validateBody(zodSchemas.resetPassword), authControllers.resetPassword);
router.get("/verify/:verificationToken", authControllers.verifyEmail);
router.post("/login", requestLimiters.login, validateBody(zodSchemas.login), authControllers.login);
router.post("/logout", authenticate, authControllers.logout);
export default router;
//# sourceMappingURL=authRouter.js.map