export interface SkillData {
  name: string;
  stat: number; // 0–100
  years: number[]; // include each year (2010, 2011, 2012...)
  srcLight: string; // e.g. 'aws-w.svg', 'unity-w.png'
  srcDark: string; // e.g. 'aws.svg', 'unity.png'
  invertIfLight?: boolean;
}

export interface SkillCategoryData {
  category: string;
  skills: SkillData[];
}
