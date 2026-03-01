import "./style.css";
import {
  loadPortfolioHomeData,
  loadProjectDetailBySlug,
} from "./portfolio/repository";
import { renderPortfolioPage, renderWelcomeScreen } from "./portfolio/view";

const app = document.querySelector<HTMLDivElement>("#app");

function getProjectSlugFromHash(): string | null {
  const hash = window.location.hash;
  if (!hash.startsWith("#project/")) {
    return null;
  }

  return hash.replace("#project/", "") || null;
}

function getExperienceIdFromHash(): string | null {
  const hash = window.location.hash;
  if (!hash.startsWith("#experience/")) {
    return null;
  }

  return hash.replace("#experience/", "") || null;
}

function getStudyIdFromHash(): string | null {
  const hash = window.location.hash;
  if (!hash.startsWith("#study/")) {
    return null;
  }

  return hash.replace("#study/", "") || null;
}

function isStackDetailOpen(): boolean {
  return window.location.hash === "#stack-detail";
}

function isContactPopupOpen(): boolean {
  return window.location.hash === "#contact-popup";
}

function runWelcomeSequence(): Promise<void> {
  return new Promise((resolve) => {
    const existing = document.getElementById("welcome-screen");
    if (existing) {
      existing.remove();
    }

    document.body.insertAdjacentHTML("beforeend", renderWelcomeScreen());

    const typedText = document.getElementById("typed-text");
    const welcomeScreen = document.getElementById("welcome-screen");
    const text = ">>> Bienvenue";
    let index = 0;

    const typeInterval = setInterval(() => {
      if (typedText && index < text.length) {
        typedText.textContent = text.slice(0, index + 1);
        index++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          if (welcomeScreen) {
            welcomeScreen.classList.add("exit-glitch");
            setTimeout(() => {
              welcomeScreen.classList.add("exit-burst");
              setTimeout(() => {
                welcomeScreen.remove();
                resolve();
              }, 200);
            }, 1100);
          } else {
            resolve();
          }
        }, 500);
      }
    }, 95);
  });
}

if (app) {
  const homeDataPromise = loadPortfolioHomeData();
  let hasPlayedInitialAnimations = false;

  const rerender = async () => {
    if (hasPlayedInitialAnimations) {
      app.classList.add("no-entry-animations");
    } else {
      app.classList.remove("no-entry-animations");
    }

    const homeData = await homeDataPromise;
    const activeSlug = getProjectSlugFromHash();
    const activeProject = activeSlug
      ? await loadProjectDetailBySlug(activeSlug)
      : null;
    const activeExperienceId = getExperienceIdFromHash();
    const activeExperience = activeExperienceId
      ? (homeData.experiences.find(
          (experience) => experience.id === activeExperienceId,
        ) ?? null)
      : null;
    const activeStudyId = getStudyIdFromHash();
    const activeStudy = activeStudyId
      ? (homeData.studies.find((study) => study.id === activeStudyId) ?? null)
      : null;
    const isStackOpen = isStackDetailOpen();
    const isContactOpen = isContactPopupOpen();

    app.innerHTML = renderPortfolioPage(
      homeData,
      activeProject,
      activeSlug,
      activeExperience,
      activeExperienceId,
      activeStudy,
      activeStudyId,
      isStackOpen,
      isContactOpen,
    );

    hasPlayedInitialAnimations = true;
  };

  runWelcomeSequence().then(() => {
    rerender();
  });

  window.addEventListener("hashchange", rerender);
}
