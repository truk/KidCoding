import { SkillModel } from './Skill';

export interface MonsterModel {
    Name: string;
    Level: number;
    Life: number;
    Speed: number;
    Strength: number;
    Stamina: number;
    Skills: SkillModel[];
    Image: string;
}