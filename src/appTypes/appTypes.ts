import type { Types, Document } from "mongoose";
import type { IEquipSlot } from "@/constants/inventoryItemTypes.js";

export interface IUser extends Document {
  email: string;
  password: string;
  token: string | null;
  verified: boolean;
  verificationToken: string | null;
  verificationTokenExpires: Date | null;
  resetToken: string | null;
  resetTokenExpires: Date | null;
}

export interface ICharacter {
  nickname: string;
  race: IRace;
  level: number;
  owner: Types.ObjectId | IUser;
  createdAt: Date;
  money: number;
  stats: ICharacterStats;
  equipped: IEquippedItems;
}

export interface ICharacterStats {
  strength: number;
  agility: number;
  luck: number;
  vitality: number;
  health: number;
  healthRecoveryRate: number;
  experience: number;
  fatigue: number;
  fatigueRecoveryRate: number;
  statPoints: number;
}

export type IRace = "human" | "elf" | "dwarf" | "orc";

/** Equipped inventory item ids per body slot. */
export type IEquippedItems = Record<IEquipSlot, Types.ObjectId | null>;
