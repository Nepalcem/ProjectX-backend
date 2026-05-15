import type { Request, Response } from "express";
import User from "@/models/user/user.js";
import type { AuthRequest } from "@/middlewares/authenticate.js";

const logout = async (req: Request, res: Response) => {
  const user = (req as AuthRequest).user!;
 
  await User.findByIdAndUpdate(user._id, { token: null });
  res.status(200).json({ message: "Logged out successfully" });
};

export default logout;
