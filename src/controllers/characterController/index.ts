import ctrlWrapper from "@/helpers/ctrlWrapper.js";
import getUserCharacter from "./getUserCharacter.js";
import createCharacter from "./createCharacter.js";

const characterControllers = {
  getUserCharacter: ctrlWrapper(getUserCharacter),
  createCharacter: ctrlWrapper(createCharacter),
};
export default characterControllers;
