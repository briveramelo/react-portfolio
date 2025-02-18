import { Project, projectData } from "./projectData.ts";

export function getProjectsBySkill(skillName: string): Project[] {
  return projectData.filter((project) =>
    project.skills.some((skill) => skill.name === skillName),
  );
}
