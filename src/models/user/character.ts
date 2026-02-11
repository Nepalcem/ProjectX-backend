import { Schema, model, Types } from "mongoose";
import type { ICharacter, ICharacterStats } from "@/appTypes/appTypes.js";
import { nicknameRegExp } from "@/constants/regularExpressions.js";

const statsSchema: Schema<ICharacterStats> = new Schema(
  {
    strength: { type: Number, required: true },
    agility: { type: Number, required: true },
    luck: { type: Number, required: true },
    vitality: { type: Number, required: true },
    health: { type: Number, required: true },
    healthRecovery: { type: Number, required: true },
    experience: { type: Number, required: true },
    fatigue: { type: Number, required: true },
    fatigueRecovery: { type: Number, required: true },
    statPoints: { type: Number, required: true },
  },
  { _id: false }, // Mongoose doesn't create a separate _id for stats
);

const characterSchema: Schema<ICharacter> = new Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
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
  },
  { versionKey: false, timestamps: true },
);

export default model<ICharacter>("Character", characterSchema);
