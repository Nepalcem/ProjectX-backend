import type { ICharacterStats } from "@/appTypes/appTypes.js";
import type { IRace } from "@/appTypes/appTypes.js";
import {
  FULL_RECOVERY_MINUTES,
  HEALTH_PER_VITALITY,
  MAX_FATIGUE,
  RACE_BASE_ATTRIBUTES,
} from "@/constants/gameplay/raceStats.js";

export const buildInitialStats = (race: IRace): ICharacterStats => {
  const { strength, agility, luck, vitality } = RACE_BASE_ATTRIBUTES[race];
  const health = vitality * HEALTH_PER_VITALITY;

  return {
    strength,
    agility,
    luck,
    vitality,
    health,
    healthRecoveryRate: health / FULL_RECOVERY_MINUTES,
    experience: 0,
    fatigue: 0,
    fatigueRecoveryRate: MAX_FATIGUE / FULL_RECOVERY_MINUTES,
    statPoints: 0,
  };
};
