import type {
  ExperienceDocument,
  PortfolioStatDocument,
  ProfileDocument,
  ProjectDocument,
  SkillDocument,
  StudyDocument,
} from "./model";

export const PORTFOLIO_COLLECTIONS = {
  experiences: "experiences",
  portfolioStats: "portfolioStats",
  profiles: "profiles",
  projects: "projects",
  skills: "skills",
  studies: "studies",
} as const;

export type PortfolioCollectionName =
  (typeof PORTFOLIO_COLLECTIONS)[keyof typeof PORTFOLIO_COLLECTIONS];

export type PortfolioDocumentMap = {
  [PORTFOLIO_COLLECTIONS.profiles]: ProfileDocument;
  [PORTFOLIO_COLLECTIONS.skills]: SkillDocument;
  [PORTFOLIO_COLLECTIONS.studies]: StudyDocument;
  [PORTFOLIO_COLLECTIONS.experiences]: ExperienceDocument;
  [PORTFOLIO_COLLECTIONS.projects]: ProjectDocument;
  [PORTFOLIO_COLLECTIONS.portfolioStats]: PortfolioStatDocument;
};

export const portfolioPaths = {
  experience: (id: string) => `${PORTFOLIO_COLLECTIONS.experiences}/${id}`,
  portfolioStat: (id: string) =>
    `${PORTFOLIO_COLLECTIONS.portfolioStats}/${id}`,
  profile: (id: string) => `${PORTFOLIO_COLLECTIONS.profiles}/${id}`,
  project: (id: string) => `${PORTFOLIO_COLLECTIONS.projects}/${id}`,
  projectsByProfile: (profileId: string) =>
    `${PORTFOLIO_COLLECTIONS.profiles}/${profileId}/${PORTFOLIO_COLLECTIONS.projects}`,
  skill: (id: string) => `${PORTFOLIO_COLLECTIONS.skills}/${id}`,
  study: (id: string) => `${PORTFOLIO_COLLECTIONS.studies}/${id}`,
} as const;
