import type { Document } from "mongoose";

interface MongooseError extends Error {
  code?: number;
  status?: number;
}

const handleMongooseError = <T extends Document>(
  error: MongooseError,
  _doc: T,
  next: (err?: Error) => void,
): void => {
  if (!error) return next();

  const { name, code } = error;

  error.status = name === "MongoServerError" && code === 11000 ? 409 : 400;

  next(error);
};

export default handleMongooseError;