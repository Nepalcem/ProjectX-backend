import { Schema, model } from "mongoose";
import type {
  IInventoryItem,
  IItemCondition,
  IItemStatModifiers,
} from "@/appTypes/itemTypes.js";

const conditionSchema = new Schema<IItemCondition>(
  {
    current: { type: Number, required: true, min: 0 },
    max: { type: Number, required: true, min: 1 },
  },
  { _id: false },
);

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

const inventoryItemSchema = new Schema<IInventoryItem>(
  {
    itemGlobalDescription: {
      type: Schema.Types.ObjectId,
      ref: "ItemGlobalDescription",
      required: true,
    },
    characterId: {
      type: Schema.Types.ObjectId,
      ref: "Character",
      default: null,
      index: true,
    },
    condition: {
      type: conditionSchema,
      required: true,
      default: () => ({ current: 100, max: 100 }),
    },
    quantity: { type: Number, required: true, default: 1, min: 1 },
    stats: { type: statModifiersSchema, default: () => ({}) },
    tradable: { type: Boolean, required: true, default: true },
  },
  { versionKey: false, timestamps: true },
);

inventoryItemSchema.pre("validate", function () {
  const { current, max } = this.condition;
  if (current > max) {
    throw new Error("Item condition current cannot exceed max");
  }
});

export default model<IInventoryItem>("InventoryItem", inventoryItemSchema);
