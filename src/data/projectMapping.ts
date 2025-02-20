import { Project, allProjects } from "./projectData.ts";

export function getProjectsBySkill(skillName: string): Project[] {
  return allProjects.filter((project) =>
    project.skills.some((skill) => skill.name === skillName),
  );
}
