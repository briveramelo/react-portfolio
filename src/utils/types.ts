export interface SkillData {
  name: string;
  stat: number; // 0–100
  year: number;
  src: string; // e.g. 'aws.svg', 'unity.png'
}

export interface StatsCategory {
  category: string;
  stats: SkillData[];
}
