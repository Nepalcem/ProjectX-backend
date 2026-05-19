/** Top-level item families */
export const ITEM_CATEGORIES = [
  "weapon",
  "armor",
  "jewelry",
  "blueprint",
  "resource",
  "scroll",
  "consumable",
  "misc"
] as const;

export type IItemCategory = (typeof ITEM_CATEGORIES)[number];

export const WEAPON_SUBTYPES = [
  "dagger",
  "sword",
  "blunt",
  "axe",
  "fist",
  "two_handed_sword",
  "two_handed_axe",
  "two_handed_blunt",
] as const;

export const ARMOR_SUBTYPES = ["helmet", "chest", "hands", "legs", "feet"] as const;

export const JEWELRY_SUBTYPES = ["ring", "earrings", "necklace"] as const;

export const BLUEPRINT_SUBTYPES = ["weapon", "armor", "jewelry"] as const;

export const RESOURCE_SUBTYPES = ["stone", "wood", "metal", "skin", "herb"] as const;

export const SCROLL_SUBTYPES = ["enchant"] as const;

export const CONSUMABLE_SUBTYPES = ["potion"] as const;

export type IWeaponSubtype = (typeof WEAPON_SUBTYPES)[number];
export type IArmorSubtype = (typeof ARMOR_SUBTYPES)[number];
export type IJewelrySubtype = (typeof JEWELRY_SUBTYPES)[number];

export type IItemSubtype =
  | IWeaponSubtype
  | IArmorSubtype
  | IJewelrySubtype
  | (typeof BLUEPRINT_SUBTYPES)[number]
  | (typeof RESOURCE_SUBTYPES)[number]
  | (typeof SCROLL_SUBTYPES)[number]
  | (typeof CONSUMABLE_SUBTYPES)[number];

/** Body slots used on Character.equipped */
export const EQUIP_SLOTS = [
  "rightHand",
  "leftHand",
  "head",
  "chest",
  "hands",
  "legs",
  "feet",
  "ring",
  "earrings",
  "necklace",
] as const;

export type IEquipSlot = (typeof EQUIP_SLOTS)[number];
