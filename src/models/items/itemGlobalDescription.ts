import { Schema, model } from "mongoose";
import { ITEM_CATEGORIES, EQUIP_SLOTS } from "@/constants/inventoryItemTypes.js";
import type {
  IItemGlobalDescription,
  IItemStatModifiers,
} from "@/appTypes/itemTypes.js";

const statModifiersSchema = new Schema<IItemStatModifiers>(
  {
    strength: Number,
    agility: Number,
    vitality: Number,
    luck: Number,
    armor: Number,
    damage: Number,
    health: Number,
    evasionChance: Number,
    critChance: Number,
  },
  { _id: false },
);

const itemGlobalDescriptionSchema = new Schema<IItemGlobalDescription>(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, default: null },
    category: { type: String, required: true, enum: ITEM_CATEGORIES },
    subType: { type: String, required: true, trim: true },
    equipSlot: { type: String, enum: EQUIP_SLOTS, default: null },
    imageUrl: { type: String, default: null },
    requiredLevel: { type: Number, required: true, default: 1, min: 1 },
    tradable: { type: Boolean, required: true, default: true },
    maxStack: { type: Number, required: true, default: 1, min: 1 },
    maxCondition: { type: Number, required: true, default: 100, min: 0 },
    baseStats: { type: statModifiersSchema, default: () => ({}) },
  },
  { versionKey: false, timestamps: true },
);

export default model<IItemGlobalDescription>(
  "ItemGlobalDescription",
  itemGlobalDescriptionSchema,
);
