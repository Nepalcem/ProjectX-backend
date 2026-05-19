import type { Response } from "express";
import Character from "@/models/user/character.js";
import type { AuthRequest } from "@/middlewares/authenticate.js";

const getUserCharacter = async (req: AuthRequest, res: Response) => {
  const character = await Character.findOne({ owner: req.user!._id });
  res.status(200).json(character);
};

export default getUserCharacter;
