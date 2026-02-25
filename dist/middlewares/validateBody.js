import HttpError from "../helpers/httpError.js";
const validateBody = (schema) => {
    return (req, res, next) => {
        if (!Object.keys(req.body).length) {
            return next(new HttpError(400, "Request body is empty"));
        }
        const result = schema.safeParse(req.body);
        if (result.success === false) {
            const firstIssue = result.error.issues[0];
            const message = firstIssue?.message || "Invalid request body";
            return next(new HttpError(400, message));
        }
        next();
    };
};
export default validateBody;
//# sourceMappingURL=validateBody.js.map