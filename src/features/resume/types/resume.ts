export interface PersonalInfo {
  fullName: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  website?: string;
  github?: string;
  linkedin?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  current: boolean;
  location: string;
  bullets: string[];
}

export interface Education {
  id: string;
  institute: string;
  degree: string;
  startDate: string;
  endDate: string;
  cgpa?: string;
}

export interface Skill {
  id: string;
  name: string;
}

export interface Project {
  id: string;
  title: string;
  description: string[];
  technologies: string[];
  github?: string;
  live?: string;
}

export interface Resume {
  personal: PersonalInfo;

  summary: string;

  experiences: Experience[];

  education: Education[];

  skills: Skill[];

  projects: Project[];
}