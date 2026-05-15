import jwt from "jsonwebtoken";
import HttpError from "@/helpers/httpError.js";
import User from "@/models/user/user.js";
import type { NextFunction, Request, Response } from "express";
import type { IUser } from "@/appTypes/appTypes.js";

export interface AuthRequest extends Request {
  user?: IUser;
}

const { JWT_SECRET } = process.env;

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined");
}

const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
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
    const { id } = jwt.verify(token, JWT_SECRET) as { id: string };
    const user = await User.findById(id);
    if (!user || !user.token || user.token !== token) {
      return next(new HttpError(401, "Unauthorized"));
    }
    (req as AuthRequest).user = user;
    next();
  } catch {
    next(new HttpError(401, "Unauthorized"));
  }
};

export default authenticate;
