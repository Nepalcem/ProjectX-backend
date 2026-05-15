import rateLimit from "express-rate-limit";

export const loginLimiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutes
    max: 10,
    skipSuccessfulRequests: true, // only failed attempts count
    message: { message: "Too many login attempts, try again later" },
  });