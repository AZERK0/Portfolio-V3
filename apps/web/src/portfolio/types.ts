export type Skill = {
  label: string;
};

export type Education = {
  degree: string;
  period: string;
  school: string;
};

export type Project = {
  description: string;
  imageUrl: string;
  name: string;
  stack: string[];
};

export type Experience = {
  company: string;
  period: string;
  role: string;
  summary: string;
};

export type Stat = {
  label: string;
  value: string;
};

export type PortfolioData = {
  about: string;
  availability: string;
  city: string;
  ctaLabel: string;
  ctaUrl: string;
  educations: Education[];
  experiences: Experience[];
  firstName: string;
  fullName: string;
  heroTitle: string;
  jobTitle: string;
  lastName: string;
  portraitUrl: string;
  projects: Project[];
  skills: Skill[];
  stats: Stat[];
};
