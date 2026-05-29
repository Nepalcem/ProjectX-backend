export type ExperienceLevelConfig = {
    level: number;
    /** Base XP reward */
    baseExperience: number;
    /** Duel vs player coefficient */
    duelPlayerCoefficient: number;
    /** Duel vs bot coefficient */
    duelBotCoefficient: number;
    /** XP required to reach the next level */
    experienceToNextLevel: number;
};
/** Keep in sync with game design / backend when duel XP is implemented. */
export declare const EXPERIENCE_LEVELS: ExperienceLevelConfig[];
//# sourceMappingURL=experience.d.ts.map