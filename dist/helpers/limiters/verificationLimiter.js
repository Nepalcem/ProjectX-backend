import rateLimit from "express-rate-limit";
export const verificationLimiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 min
    max: 5,
    message: { message: "Too many verification requests, try again later" },
});
//# sourceMappingURL=verificationLimiter.js.map