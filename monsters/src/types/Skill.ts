export interface SkillModel {
    Type: SkillType;
    Description: string;
    Power: number;
}

export enum SkillType {
    OneEnemy = 0,
    AllEnemies = 1,
    OneAlly = 2,
    AllAllies = 3
}