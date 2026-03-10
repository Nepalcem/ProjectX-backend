declare const requestLimiters: {
    register: import("express-rate-limit").RateLimitRequestHandler;
    verification: import("express-rate-limit").RateLimitRequestHandler;
    forgotPassword: import("express-rate-limit").RateLimitRequestHandler;
};
export default requestLimiters;
//# sourceMappingURL=index.d.ts.map