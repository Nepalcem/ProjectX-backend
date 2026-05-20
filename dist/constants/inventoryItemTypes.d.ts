/** Top-level item families */
export declare const ITEM_CATEGORIES: readonly ["weapon", "armor", "jewelry", "blueprint", "resource", "scroll", "consumable", "misc"];
export type IItemCategory = (typeof ITEM_CATEGORIES)[number];
export declare const WEAPON_SUBTYPES: readonly ["dagger", "sword", "blunt", "axe", "fist", "two_handed_sword", "two_handed_axe", "two_handed_blunt"];
export declare const ARMOR_SUBTYPES: readonly ["helmet", "chest", "hands", "legs", "feet"];
export declare const JEWELRY_SUBTYPES: readonly ["ring", "earrings", "necklace"];
export declare const BLUEPRINT_SUBTYPES: readonly ["weapon", "armor", "jewelry"];
export declare const RESOURCE_SUBTYPES: readonly ["stone", "wood", "metal", "skin", "herb"];
export declare const SCROLL_SUBTYPES: readonly ["enchant"];
export declare const CONSUMABLE_SUBTYPES: readonly ["potion"];
export type IWeaponSubtype = (typeof WEAPON_SUBTYPES)[number];
export type IArmorSubtype = (typeof ARMOR_SUBTYPES)[number];
export type IJewelrySubtype = (typeof JEWELRY_SUBTYPES)[number];
export type IItemSubtype = IWeaponSubtype | IArmorSubtype | IJewelrySubtype | (typeof BLUEPRINT_SUBTYPES)[number] | (typeof RESOURCE_SUBTYPES)[number] | (typeof SCROLL_SUBTYPES)[number] | (typeof CONSUMABLE_SUBTYPES)[number];
/** Body slots used on Character.equipped */
export declare const EQUIP_SLOTS: readonly ["rightHand", "leftHand", "head", "chest", "hands", "legs", "feet", "ring", "earrings", "necklace"];
export type IEquipSlot = (typeof EQUIP_SLOTS)[number];
//# sourceMappingURL=inventoryItemTypes.d.ts.map