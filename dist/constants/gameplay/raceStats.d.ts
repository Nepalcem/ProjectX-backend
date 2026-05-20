import type { IRace } from "../../appTypes/appTypes.js";
/** HP per 1 vitality at character creation. */
export declare const HEALTH_PER_VITALITY = 6;
/** Minutes to recover health or fatigue from 0 to 100%. */
export declare const FULL_RECOVERY_MINUTES = 10;
/** Fatigue is stored on a 0–100 scale. */
export declare const MAX_FATIGUE = 100;
export type RaceBaseAttributes = {
    strength: number;
    agility: number;
    luck: number;
    vitality: number;
};
export declare const RACE_BASE_ATTRIBUTES: Record<IRace, RaceBaseAttributes>;
//# sourceMappingURL=raceStats.d.ts.map