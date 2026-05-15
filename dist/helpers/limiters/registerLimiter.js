import rateLimit from "express-rate-limit";
export const registerLimiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutes
    max: 10, // max 10 requests
    message: {
        message: "Too many registration requests, try again later",
    },
});
//# sourceMappingURL=registerLimiter.js.map