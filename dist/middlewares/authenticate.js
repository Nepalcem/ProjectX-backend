import jwt from "jsonwebtoken";
import HttpError from "../helpers/httpError.js";
import User from "../models/user/user.js";
const { JWT_SECRET } = process.env;
if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined");
}
const authenticate = async (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        return next(new HttpError(401, "Unauthorized"));
    }
    const [bearer, token] = authorization.split(" ");
    if (bearer !== "Bearer") {
        return next(new HttpError(401, "Unauthorized"));
    }
    if (!token) {
        return next(new HttpError(401, "Unauthorized"));
    }
    try {
        const { id } = jwt.verify(token, JWT_SECRET);
        const user = await User.findById(id);
        if (!user || !user.token || user.token !== token) {
            return next(new HttpError(401, "Unauthorized"));
        }
        req.user = user;
        next();
    }
    catch {
        next(new HttpError(401, "Unauthorized"));
    }
};
export default authenticate;
//# sourceMappingURL=authenticate.js.map