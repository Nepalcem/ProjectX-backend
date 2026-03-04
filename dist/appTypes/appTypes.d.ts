import type { Types, Document } from "mongoose";
export interface IUser extends Document {
    email: string;
    password: string;
    token: string | null;
    verified: boolean;
    verificationToken: string | null;
    verificationTokenExpires: Date | null;
}
export interface ICharacter {
    id: string;
    nickname: string;
    race: IRace;
    level: number;
    owner: Types.ObjectId | IUser;
    createdAt: Date;
    money: number;
    stats: ICharacterStats;
}
export interface ICharacterStats {
    strength: number;
    agility: number;
    luck: number;
    vitality: number;
    health: number;
    healthRecovery: number;
    experience: number;
    fatigue: number;
    fatigueRecovery: number;
    statPoints: number;
}
export type IRace = "human" | "elf" | "dwarf" | "orc";
//# sourceMappingURL=appTypes.d.ts.map