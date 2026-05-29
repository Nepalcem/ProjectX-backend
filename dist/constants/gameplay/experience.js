/** Keep in sync with game design / backend when duel XP is implemented. */
export const EXPERIENCE_LEVELS = [
    {
        level: 0,
        baseExperience: 10,
        duelPlayerCoefficient: 1,
        duelBotCoefficient: 0.75,
        experienceToNextLevel: 30,
    },
    {
        level: 1,
        baseExperience: 15,
        duelPlayerCoefficient: 1,
        duelBotCoefficient: 0.74,
        experienceToNextLevel: 150,
    },
    {
        level: 2,
        baseExperience: 20,
        duelPlayerCoefficient: 1,
        duelBotCoefficient: 0.73,
        experienceToNextLevel: 400,
    },
    {
        level: 3,
        baseExperience: 25,
        duelPlayerCoefficient: 1,
        duelBotCoefficient: 0.72,
        experienceToNextLevel: 800,
    },
];
//# sourceMappingURL=experience.js.map