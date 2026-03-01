import "./style.css";
import {
  loadPortfolioHomeData,
  loadProjectDetailBySlug,
} from "./portfolio/repository";
import {
  renderPortfolioLoadingState,
  renderPortfolioPage,
} from "./portfolio/view";

const app = document.querySelector<HTMLDivElement>("#app");

function getProjectSlugFromHash(): string | null {
  const hash = window.location.hash;
  if (!hash.startsWith("#project/")) {
    return null;
  }

  return hash.replace("#project/", "") || null;
}

function isContactPopupOpen(): boolean {
  return window.location.hash === "#contact-popup";
}

if (app) {
  app.innerHTML = renderPortfolioLoadingState();

  const homeDataPromise = loadPortfolioHomeData();

  const rerender = async () => {
    const homeData = await homeDataPromise;
    const activeSlug = getProjectSlugFromHash();
    const activeProject = activeSlug
      ? await loadProjectDetailBySlug(activeSlug)
      : null;
    const isContactOpen = isContactPopupOpen();

    app.innerHTML = renderPortfolioPage(
      homeData,
      activeProject,
      activeSlug,
      isContactOpen,
    );
  };

  rerender();
  window.addEventListener("hashchange", rerender);
}
