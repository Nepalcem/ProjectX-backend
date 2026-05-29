import type { Response } from "express";
import Character from "@/models/user/character.js";
import HttpError from "@/helpers/httpError.js";
import type { AuthRequest } from "@/middlewares/authenticate.js";

const deleteCharacter = async (req: AuthRequest, res: Response) => {
  const character = await Character.findOne({ owner: req.user!._id });

  if (!character) {
    throw new HttpError(404, "Character not found");
  }

  await Character.deleteOne({ _id: character._id });

  res.status(200).json({ message: "Character deleted successfully" });
};

export default deleteCharacter;
