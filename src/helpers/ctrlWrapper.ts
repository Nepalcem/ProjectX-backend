import type { RequestHandler } from "express";

const ctrlWrapper = (ctrl: RequestHandler): RequestHandler => {
  return async (req, res, next) => {
    try {
      await Promise.resolve(ctrl(req, res, next));
    } catch (error) {
      next(error);
    }
  };
};

export default ctrlWrapper;
