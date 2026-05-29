import ctrlWrapper from "@/helpers/ctrlWrapper.js";
import getUserCharacter from "./getUserCharacter.js";
import createCharacter from "./createCharacter.js";
import deleteCharacter from "./deleteCharacter.js";

const characterControllers = {
  getUserCharacter: ctrlWrapper(getUserCharacter),
  createCharacter: ctrlWrapper(createCharacter),
  deleteCharacter: ctrlWrapper(deleteCharacter),
};

export default characterControllers;
