import Character from "../../models/user/character.js";
const getUserCharacter = async (req, res) => {
    const character = await Character.findOne({ owner: req.user._id });
    res.status(200).json(character);
};
export default getUserCharacter;
//# sourceMappingURL=getUserCharacter.js.map