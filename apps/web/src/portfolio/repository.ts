import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  where,
  type QueryConstraint,
} from "firebase/firestore";

import { firestoreDb } from "../firebase";
import type {
  ExperienceDocument,
  PortfolioHomeViewModel,
  PortfolioStatDocument,
  ProfileDocument,
  ProjectDocument,
  SkillDocument,
  StudyDocument,
} from "./model";
import { PORTFOLIO_COLLECTIONS } from "./firestore-schema";
import {
  experiencesSeed,
  profileSeed,
  projectsSeed,
  skillsSeed,
  statsSeed,
  studiesSeed,
} from "./seed";

const PROFILE_ID =
  import.meta.env.VITE_PORTFOLIO_PROFILE_ID ?? "raphael-charpentier";

function toSortedPublished<
  T extends { status: string; order?: number; featuredRank?: number },
>(list: T[], rankField: "order" | "featuredRank" = "order"): T[] {
  return list
    .filter((item) => item.status === "published")
    .sort((a, b) => {
      const left =
        rankField === "featuredRank"
          ? (a.featuredRank ?? Number.MAX_SAFE_INTEGER)
          : (a.order ?? Number.MAX_SAFE_INTEGER);
      const right =
        rankField === "featuredRank"
          ? (b.featuredRank ?? Number.MAX_SAFE_INTEGER)
          : (b.order ?? Number.MAX_SAFE_INTEGER);
      return left - right;
    });
}

function getFallbackHomeData(): PortfolioHomeViewModel {
  return {
    profile: profileSeed,
    studies: toSortedPublished(studiesSeed),
    experiences: toSortedPublished(experiencesSeed),
    projects: toSortedPublished(projectsSeed, "featuredRank"),
    skills: toSortedPublished(skillsSeed),
    stats: toSortedPublished(statsSeed),
  };
}

async function getCollectionByProfile<T>(
  collectionName: string,
  sortField: "order" | "featuredRank",
): Promise<T[]> {
  if (!firestoreDb) {
    return [];
  }

  const constraints: QueryConstraint[] = [
    where("profileId", "==", PROFILE_ID),
    where("status", "==", "published"),
    orderBy(sortField, "asc"),
  ];

  const snapshot = await getDocs(
    query(collection(firestoreDb, collectionName), ...constraints),
  );
  return snapshot.docs.map((docItem) => docItem.data() as T);
}

export async function loadPortfolioHomeData(): Promise<PortfolioHomeViewModel> {
  if (!firestoreDb) {
    return getFallbackHomeData();
  }

  try {
    const profileSnapshot = await getDoc(
      doc(firestoreDb, PORTFOLIO_COLLECTIONS.profiles, PROFILE_ID),
    );

    if (!profileSnapshot.exists()) {
      return getFallbackHomeData();
    }

    const [skills, studies, experiences, projects, stats] = await Promise.all([
      getCollectionByProfile<SkillDocument>(
        PORTFOLIO_COLLECTIONS.skills,
        "order",
      ),
      getCollectionByProfile<StudyDocument>(
        PORTFOLIO_COLLECTIONS.studies,
        "order",
      ),
      getCollectionByProfile<ExperienceDocument>(
        PORTFOLIO_COLLECTIONS.experiences,
        "order",
      ),
      getCollectionByProfile<ProjectDocument>(
        PORTFOLIO_COLLECTIONS.projects,
        "featuredRank",
      ),
      getCollectionByProfile<PortfolioStatDocument>(
        PORTFOLIO_COLLECTIONS.portfolioStats,
        "order",
      ),
    ]);

    return {
      profile: profileSnapshot.data() as ProfileDocument,
      skills,
      studies,
      experiences,
      projects,
      stats,
    };
  } catch (error) {
    console.error(
      "Failed to load Firestore portfolio data, fallback to local seed",
      error,
    );
    return getFallbackHomeData();
  }
}

export async function loadProjectDetailBySlug(
  slug: string,
): Promise<ProjectDocument | null> {
  const fallback =
    projectsSeed.find(
      (project) => project.slug === slug && project.status === "published",
    ) ?? null;

  if (!firestoreDb) {
    return fallback;
  }

  try {
    const projectsRef = collection(firestoreDb, PORTFOLIO_COLLECTIONS.projects);
    const snapshot = await getDocs(
      query(
        projectsRef,
        where("profileId", "==", PROFILE_ID),
        where("status", "==", "published"),
        where("slug", "==", slug),
        limit(1),
      ),
    );

    if (snapshot.empty) {
      return fallback;
    }

    return snapshot.docs[0].data() as ProjectDocument;
  } catch (error) {
    console.error("Failed to load project detail from Firestore", error);
    return fallback;
  }
}
