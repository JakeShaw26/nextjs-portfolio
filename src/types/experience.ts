type Role = {
  roleName: string;
  isCurrentRole: boolean;
  key: number;
};

type Skill = {
  skill: string;
  proficiency: string;
  key: number;
};

type ExperienceSectionType = {
  employer: string;
  startDate: string;
  endDate: string;
  roles: Role[];
  skillsUsed: Skill[];
  description: string;
  key: number;
};

export default ExperienceSectionType;
