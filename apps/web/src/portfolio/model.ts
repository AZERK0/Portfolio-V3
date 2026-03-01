export type DocumentStatus = "draft" | "published" | "archived";

export type LocaleCode = "fr" | "en";

export type DatePrecision = "day" | "month" | "year";

export type DatePoint = {
  value: string;
  precision: DatePrecision;
};

export type DateRange = {
  start: DatePoint;
  end?: DatePoint;
  isCurrent?: boolean;
  label: string;
};

export type ExternalLinkType =
  | "website"
  | "github"
  | "linkedin"
  | "discord"
  | "download"
  | "contact"
  | "other";

export type ExternalLink = {
  id: string;
  label: string;
  type: ExternalLinkType;
  url: string;
  openInNewTab?: boolean;
};

export type BadgeTone = "neutral" | "green" | "blue" | "yellow" | "red";

export type Badge = {
  label: string;
  tone: BadgeTone;
};

export type MediaKind = "image" | "video";

export type MediaAsset = {
  kind: MediaKind;
  alt: string;
  caption?: string;
  storagePath?: string;
  url: string;
};

export type StackCategory =
  | "language"
  | "frontend"
  | "backend"
  | "data"
  | "devops"
  | "tooling"
  | "other";

export type SkillLevel = "beginner" | "intermediate" | "advanced" | "expert";

export type SkillDocument = {
  id: string;
  profileId: string;
  name: string;
  category: StackCategory;
  level?: SkillLevel;
  iconName?: string;
  order: number;
  highlighted?: boolean;
  status: DocumentStatus;
};

export type StudyDocument = {
  id: string;
  profileId: string;
  school: string;
  degree: string;
  degreeLevel?: string;
  period: DateRange;
  location?: string;
  highlights?: string[];
  imageUrl?: string;
  status: DocumentStatus;
  order: number;
};

export type ExperienceType =
  | "internship"
  | "freelance"
  | "fulltime"
  | "parttime";

export type ExperienceDocument = {
  id: string;
  profileId: string;
  company: string;
  role: string;
  type: ExperienceType;
  period: DateRange;
  location?: string;
  locationMode?: "on-site" | "hybrid" | "remote";
  summary: string;
  achievements?: string[];
  stack?: string[];
  status: DocumentStatus;
  order: number;
};

export type ProjectCategory =
  | "freelance"
  | "personal"
  | "school"
  | "internship"
  | "open-source";

export type ProjectMetric = {
  label: string;
  value: string;
};

export type ProjectDetailSection = {
  id: string;
  title: string;
  body: string;
};

export type ProjectDocument = {
  id: string;
  profileId: string;
  slug: string;
  title: string;
  shortDescription: string;
  longDescription?: string;
  category: ProjectCategory;
  period: DateRange;
  stack: string[];
  cover: MediaAsset;
  gallery?: MediaAsset[];
  badge?: Badge;
  links?: ExternalLink[];
  alert?: {
    title: string;
    description: string;
    tone: BadgeTone;
  };
  metrics?: ProjectMetric[];
  sections?: ProjectDetailSection[];
  featured: boolean;
  featuredRank?: number;
  status: DocumentStatus;
};

export type PortfolioStatDocument = {
  id: string;
  profileId: string;
  label: string;
  value: string;
  order: number;
  status: DocumentStatus;
};

export type ProfileDocument = {
  id: string;
  slug: string;
  locale: LocaleCode;
  firstName: string;
  lastName: string;
  fullName: string;
  title: string;
  headline: string;
  heroTitle: string;
  city: string;
  country: string;
  portraitUrl: string;
  availability: string;
  aboutShort: string;
  aboutLong?: string;
  email?: string;
  phone?: string;
  links: ExternalLink[];
  status: DocumentStatus;
};

export type PortfolioHomeViewModel = {
  profile: ProfileDocument;
  studies: StudyDocument[];
  experiences: ExperienceDocument[];
  projects: ProjectDocument[];
  skills: SkillDocument[];
  stats: PortfolioStatDocument[];
};

export type ProjectDetailViewModel = {
  profile: Pick<ProfileDocument, "id" | "fullName" | "slug">;
  project: ProjectDocument;
  relatedProjects: Pick<
    ProjectDocument,
    "id" | "slug" | "title" | "cover" | "stack"
  >[];
};
