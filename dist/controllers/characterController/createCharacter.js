import Character from "../../models/user/character.js";
import HttpError from "../../helpers/httpError.js";
import { buildInitialStats } from "../../helpers/gameFunctions/buildInitialStats.js";
const createCharacter = async (req, res) => {
    const { nickname, race } = req.body;
    const ownerId = req.user._id;
    const existingCharacter = await Character.findOne({ owner: ownerId });
    if (existingCharacter) {
        throw new HttpError(409, "You already have a character");
    }
    const nicknameTaken = await Character.findOne({ nickname });
    if (nicknameTaken) {
        throw new HttpError(409, "Nickname already taken");
    }
    const character = await Character.create({
        nickname,
        race,
        owner: ownerId,
        createdAt: new Date(),
        stats: buildInitialStats(race),
    });
    res.status(201).json({
        message: "Character created",
        character,
    });
};
export default createCharacter;
//# sourceMappingURL=createCharacter.js.map