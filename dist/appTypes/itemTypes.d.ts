import type { Types, Document } from "mongoose";
import type { IItemCategory, IItemSubtype, IEquipSlot } from "../constants/inventoryItemTypes.js";
/** Durability: current XX of max YY (e.g. 47 / 100). */
export interface IItemCondition {
    current: number;
    max: number;
}
export interface IItemStatModifiers {
    strength?: number;
    agility?: number;
    vitality?: number;
    luck?: number;
    armor?: number;
    damage?: number;
    health?: number;
    evasionChance?: number;
    critChance?: number;
}
/**
 * Every "Iron Sword" points here so name/image aren't duplicated per copy.
 */
export interface IItemGlobalDescription extends Document {
    name: string;
    description: string | null;
    category: IItemCategory;
    subType: IItemSubtype;
    equipSlot: IEquipSlot | null;
    imageUrl: string | null;
    requiredLevel: number;
    tradable: boolean;
    /** Maximum stack size for this item. */
    maxStack: number;
    /** Default max durability when a new instance is created. */
    maxCondition: number;
    baseStats: IItemStatModifiers;
}
/**
 * Inventory = all rows with this characterId. Equipped = subset linked from Character.
 */
export interface IInventoryItem extends Document {
    itemGlobalDescription: Types.ObjectId | IItemGlobalDescription;
    characterId: Types.ObjectId | null;
    condition: IItemCondition;
    quantity: number;
    stats: IItemStatModifiers;
    tradable: boolean;
}
//# sourceMappingURL=itemTypes.d.ts.map