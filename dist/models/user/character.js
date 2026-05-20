import { Schema, model, Types } from "mongoose";
import { EQUIP_SLOTS } from "../../constants/inventoryItemTypes.js";
import { nicknameRegExp } from "../../constants/regularExpressions.js";
const equippedSchema = new Schema(Object.fromEntries(EQUIP_SLOTS.map((slot) => [
    slot,
    { type: Schema.Types.ObjectId, ref: "InventoryItem", default: null },
])), { _id: false });
const emptyEquipped = () => Object.fromEntries(EQUIP_SLOTS.map((slot) => [slot, null]));
const statsSchema = new Schema({
    strength: { type: Number, required: true },
    agility: { type: Number, required: true },
    luck: { type: Number, required: true },
    vitality: { type: Number, required: true },
    health: { type: Number, required: true },
    healthRecoveryRate: { type: Number, required: true },
    experience: { type: Number, required: true },
    fatigue: { type: Number, required: true },
    fatigueRecoveryRate: { type: Number, required: true },
    statPoints: { type: Number, required: true },
}, { _id: false });
const characterSchema = new Schema({
    nickname: {
        type: String,
        required: true,
        unique: true,
        match: nicknameRegExp,
    },
    race: {
        type: String,
        required: true,
        enum: ["human", "elf", "dwarf", "orc"],
    },
    level: {
        type: Number,
        required: true,
        default: 0,
    },
    owner: {
        type: Types.ObjectId,
        ref: "User",
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
    },
    money: {
        type: Number,
        required: true,
        default: 0,
    },
    stats: {
        type: statsSchema,
        required: true,
    },
    equipped: {
        type: equippedSchema,
        required: true,
        default: emptyEquipped,
    },
}, { versionKey: false, timestamps: true });
export default model("Character", characterSchema);
//# sourceMappingURL=character.js.map