export interface SkillData {
  name: string;
  stat: number; // 0–100
  year: number;
  srcLight: string; // e.g. 'aws-w.svg', 'unity-w.png'
  srcDark: string; // e.g. 'aws.svg', 'unity.png'
  invertIfLight?: boolean;
}

export interface StatsCategory {
  category: string;
  stats: SkillData[];
}
