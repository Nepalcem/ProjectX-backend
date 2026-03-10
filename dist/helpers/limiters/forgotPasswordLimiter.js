import rateLimit from "express-rate-limit";
export const forgotPasswordLimiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 min
    max: 5,
    message: { message: "Too many password requests, try again later" },
});
//# sourceMappingURL=forgotPasswordLimiter.js.map