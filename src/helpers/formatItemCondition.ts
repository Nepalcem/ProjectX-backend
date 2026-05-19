import type { IItemCondition } from "@/appTypes/itemTypes.js";

/** Display durability as "47/100". */
export const formatItemCondition = ({ current, max }: IItemCondition): string =>
  `${current}/${max}`;
