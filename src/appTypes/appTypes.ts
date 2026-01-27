export interface IUser {
  email: string;
  password: string;
  nickname: string;
  token: string | null;
  verified: boolean;
  verificationToken: string;
}

export interface ICharacter {
  id: string;
  race: IRace;
  level: number;
  owner: string; // user ID
  createdAt: Date;
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
  money: number;
}

export type IRace = "human" | "elf" | "dwarf" | "orc";
