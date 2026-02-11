import type { Request, Response, NextFunction } from "express";
import type { ObjectSchema } from "joi";
import HttpError from "@/helpers/httpError.js";

const validateBody = (schema: ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!Object.keys(req.body).length) {
      return next(new HttpError(400, "Request body is empty"));
    }

    const { error } = schema.validate(req.body);

    if (error) {
      return next(new HttpError(400, error.message));
    }

    next();
  };
};

export default validateBody;
