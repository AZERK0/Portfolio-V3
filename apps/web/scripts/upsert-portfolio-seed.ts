import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

import { PORTFOLIO_COLLECTIONS } from "../src/portfolio/firestore-schema";
import {
  experiencesSeed,
  profileSeed,
  projectsSeed,
  skillsSeed,
  statsSeed,
  studiesSeed,
} from "../src/portfolio/seed";

type ServiceAccount = {
  clientEmail: string;
  privateKey: string;
  projectId: string;
};

function readServiceAccount(): ServiceAccount {
  const raw = process.env.FIREBASE_SERVICE_ACCOUNT_JSON;
  if (!raw) {
    throw new Error("Missing FIREBASE_SERVICE_ACCOUNT_JSON env var");
  }

  const parsed = JSON.parse(raw) as {
    client_email?: string;
    private_key?: string;
    project_id?: string;
  };

  if (!parsed.client_email || !parsed.private_key || !parsed.project_id) {
    throw new Error("Invalid FIREBASE_SERVICE_ACCOUNT_JSON payload");
  }

  return {
    clientEmail: parsed.client_email,
    privateKey: parsed.private_key,
    projectId: parsed.project_id,
  };
}

async function upsertCollection<T extends { id: string }>(
  collectionName: string,
  docs: T[],
) {
  const db = getFirestore();
  const batch = db.batch();

  docs.forEach((item) => {
    const ref = db.collection(collectionName).doc(item.id);
    batch.set(ref, item, { merge: true });
  });

  await batch.commit();
}

async function main() {
  const serviceAccount = readServiceAccount();

  if (!getApps().length) {
    initializeApp({
      credential: cert({
        projectId: serviceAccount.projectId,
        clientEmail: serviceAccount.clientEmail,
        privateKey: serviceAccount.privateKey,
      }),
      projectId: serviceAccount.projectId,
    });
  }

  await upsertCollection(PORTFOLIO_COLLECTIONS.profiles, [profileSeed]);
  await upsertCollection(PORTFOLIO_COLLECTIONS.skills, skillsSeed);
  await upsertCollection(PORTFOLIO_COLLECTIONS.studies, studiesSeed);
  await upsertCollection(PORTFOLIO_COLLECTIONS.experiences, experiencesSeed);
  await upsertCollection(PORTFOLIO_COLLECTIONS.projects, projectsSeed);
  await upsertCollection(PORTFOLIO_COLLECTIONS.portfolioStats, statsSeed);

  console.log("Portfolio seed upsert complete.");
}

main().catch((error: unknown) => {
  console.error("Portfolio seed upsert failed", error);
  process.exit(1);
});
