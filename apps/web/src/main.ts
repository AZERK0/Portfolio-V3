import "./style.css";
import { renderPortfolioPage } from "./portfolio/view";

const app = document.querySelector<HTMLDivElement>("#app");

if (app) {
  app.innerHTML = renderPortfolioPage();
}
