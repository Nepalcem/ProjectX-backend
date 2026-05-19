import type { IRace } from "@/appTypes/appTypes.js";

/** HP per 1 vitality at character creation. */
export const HEALTH_PER_VITALITY = 6;

/** Minutes to recover health or fatigue from 0 to 100%. */
export const FULL_RECOVERY_MINUTES = 10;

/** Fatigue is stored on a 0–100 scale. */
export const MAX_FATIGUE = 100;

export type RaceBaseAttributes = {
  strength: number;
  agility: number;
  luck: number;
  vitality: number;
};

export const RACE_BASE_ATTRIBUTES: Record<IRace, RaceBaseAttributes> = {
  human: { strength: 4, agility: 4, luck: 5, vitality: 5 },
  elf: { strength: 4, agility: 5, luck: 4, vitality: 5 },
  dwarf: { strength: 4, agility: 4, luck: 4, vitality: 6 },
  orc: { strength: 5, agility: 4, luck: 4, vitality: 5 },
};
