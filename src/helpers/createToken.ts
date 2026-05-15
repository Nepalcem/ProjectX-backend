import jwt, { type SignOptions } from "jsonwebtoken";

const { JWT_SECRET, JWT_EXPIRES_IN } = process.env;

const createToken = (userId: string) => {
  if (!JWT_SECRET || !JWT_EXPIRES_IN) {
    throw new Error("JWT_SECRET or JWT_EXPIRES_IN is not defined.");
  }
  

  return jwt.sign({ id: userId }, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN,
  } as SignOptions);
};

export default createToken;
