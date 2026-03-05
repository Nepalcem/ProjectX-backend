import express from "express";
import authControllers from "../controllers/authController/index.js";
import validateBody from "../middlewares/validateBody.js";
import zodSchemas from "../zodSchemas/index.js";
import { registerLimiter } from "../helpers/limiters/registerLimiter.js";
const router = express.Router();
router.post("/register", registerLimiter, validateBody(zodSchemas.register), authControllers.register);
router.post("/resend-verification-email", validateBody(zodSchemas.verifyEmail), authControllers.resendVerificationEmail);
router.get("/verify/:verificationToken", authControllers.verifyEmail);
export default router;
//# sourceMappingURL=authRouter.js.map