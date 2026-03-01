import { UiCard } from "@repo/ui/card";

import type {
  ExperienceDocument,
  PortfolioHomeViewModel,
  ProfileDocument,
  ProjectDocument,
  StudyDocument,
} from "./model";

const STACK_CATEGORY_META: Record<
  NonNullable<PortfolioHomeViewModel["skills"][number]["category"]>,
  { label: string; icon: string }
> = {
  language: { label: "Langages", icon: "code" },
  frontend: { label: "Frontend", icon: "web" },
  backend: { label: "Backend", icon: "dns" },
  data: { label: "Data", icon: "database" },
  devops: { label: "DevOps", icon: "deployed_code" },
  tooling: { label: "Tooling", icon: "build" },
  other: { label: "Autres", icon: "extension" },
};

function renderSocialIconButtons(profile: ProfileDocument) {
  const itemClass =
    "inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-[#9d8a76] transition hover:bg-[#f48c25]/10 hover:text-[#f48c25]";

  const socialLinks = profile.links
    .filter((link) => link.type === "linkedin" || link.type === "github")
    .map((link) => {
      const icon =
        link.type === "linkedin"
          ? '<svg viewBox="0 0 24 24" class="h-4 w-4 fill-current"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7 0h3.84v2.05h.05c.53-1.01 1.84-2.07 3.78-2.07 4.04 0 4.79 2.66 4.79 6.11V23h-4v-7.76c0-1.85-.03-4.23-2.58-4.23-2.58 0-2.97 2.01-2.97 4.09V23h-4V8z"/></svg>'
          : '<svg viewBox="0 0 24 24" class="h-4 w-4 fill-current"><path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.41-4.04-1.41a3.19 3.19 0 0 0-1.34-1.76c-1.1-.75.08-.73.08-.73a2.53 2.53 0 0 1 1.85 1.24 2.58 2.58 0 0 0 3.53 1 2.58 2.58 0 0 1 .77-1.62c-2.66-.3-5.47-1.33-5.47-5.9a4.61 4.61 0 0 1 1.23-3.2 4.28 4.28 0 0 1 .12-3.15s1-.32 3.3 1.22a11.42 11.42 0 0 1 6 0c2.29-1.54 3.29-1.22 3.29-1.22a4.28 4.28 0 0 1 .12 3.15 4.6 4.6 0 0 1 1.23 3.2c0 4.58-2.82 5.6-5.5 5.9a2.88 2.88 0 0 1 .83 2.23v3.3c0 .32.21.7.83.58A12 12 0 0 0 12 .5z"/></svg>';

      return `<a href="${link.url}" aria-label="${link.label}" class="${itemClass}" ${link.openInNewTab ? 'target="_blank" rel="noreferrer"' : ""}>${icon}</a>`;
    })
    .join("");

  return socialLinks;
}

function renderHeader(profile: ProfileDocument) {
  return `<header class="sticky top-4 z-40 w-full animate-blur-in" style="animation-delay: 0ms"><div class="mx-auto flex h-14 max-w-fit items-center justify-between gap-6 rounded-full border border-white/10 bg-white/5 px-6 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)]"><div class="flex items-center gap-2 text-[#eaddcf]"><span class="material-symbols-outlined text-[#f48c25]">terminal</span><span class="text-lg font-bold tracking-tight">${profile.firstName.toUpperCase()}.${profile.lastName.toUpperCase()}</span></div><div class="h-5 w-px bg-white/10"></div><nav class="hidden items-center gap-1 md:flex"><a href="#projects" class="rounded-full px-4 py-1.5 text-sm font-medium text-[#9d8a76] transition hover:bg-white/5 hover:text-[#eaddcf]">Projects</a><a href="#experience" class="rounded-full px-4 py-1.5 text-sm font-medium text-[#9d8a76] transition hover:bg-white/5 hover:text-[#eaddcf]">Experience</a><a href="#contact-popup" class="rounded-full px-4 py-1.5 text-sm font-medium text-[#9d8a76] transition hover:bg-white/5 hover:text-[#eaddcf]">Contact</a></nav><div class="h-5 w-px bg-white/10"></div><div class="flex items-center gap-2"><a href="#contact-popup" class="inline-flex h-8 items-center justify-center rounded-full bg-gradient-to-r from-[#f48c25] to-[#d4740a] px-4 text-sm font-semibold text-[#1a120b] transition hover:shadow-[0_0_20px_rgba(244,140,37,0.5)] hover:scale-105"><span class="material-symbols-outlined mr-1.5 text-[16px]">mail</span>Contact</a>${renderSocialIconButtons(profile)}</div></div></header>`;
}

function renderHeroSection(data: PortfolioHomeViewModel) {
  return `<section class="animate-blur-in relative col-span-1 flex min-h-[29rem] flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br from-[#f48c25] via-[#d4740a] to-[#1a120b] p-8 md:col-span-2 lg:col-span-7" style="animation-delay: 100ms"><div class="pointer-events-none absolute inset-0 overflow-hidden"><div class="hero-blob hero-blob-1"></div><div class="hero-blob hero-blob-2"></div><div class="hero-blob hero-blob-3"></div><div class="hero-blob hero-blob-4"></div><div class="hero-blob hero-blob-5"></div></div><div class="relative z-10"><div class="mb-6 inline-flex items-center rounded-full border border-black/10 bg-black/20 px-3 py-1 text-xs font-medium text-black backdrop-blur-sm"><span class="mr-2 flex h-2 w-2 rounded-full bg-black"></span>${data.profile.availability}</div><h1 class="text-4xl font-black uppercase leading-[0.9] tracking-tighter text-[#1a120b] md:text-5xl lg:text-6xl">${data.profile.heroTitle}</h1></div><div class="relative z-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end"><p class="max-w-md text-lg font-medium leading-relaxed text-[#1a120b]/80">${data.profile.aboutShort}</p><a href="#projects" class="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#1a120b] text-[#f48c25] transition hover:scale-110"><span class="material-symbols-outlined">arrow_outward</span></a></div><div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div></section><style>
.hero-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  mix-blend-mode: multiply;
  will-change: transform;
}
.hero-blob-1 {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, #ff9f43 0%, #f48c25 50%, transparent 70%);
  top: -50px;
  left: -50px;
  animation: blob-float-1 12s ease-in-out infinite;
}
.hero-blob-2 {
  width: 350px;
  height: 350px;
  background: radial-gradient(circle, #1a120b 0%, #0d0906 60%, transparent 70%);
  bottom: -80px;
  right: -60px;
  animation: blob-float-2 14s ease-in-out infinite;
  mix-blend-mode: overlay;
}
.hero-blob-3 {
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, #ffb366 0%, #f48c25 40%, transparent 70%);
  top: 40%;
  left: 30%;
  animation: blob-float-3 10s ease-in-out infinite;
}
.hero-blob-4 {
  width: 250px;
  height: 250px;
  background: radial-gradient(circle, #2d1f14 0%, #1a120b 50%, transparent 70%);
  top: 20%;
  right: 10%;
  animation: blob-float-4 16s ease-in-out infinite;
  mix-blend-mode: overlay;
}
.hero-blob-5 {
  width: 180px;
  height: 180px;
  background: radial-gradient(circle, #ffd699 0%, #f48c25 50%, transparent 70%);
  bottom: 20%;
  left: 10%;
  animation: blob-float-5 11s ease-in-out infinite;
  opacity: 0.7;
}
@keyframes blob-float-1 {
  0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
  20% { transform: translate(60px, 40px) scale(1.3) rotate(15deg); }
  40% { transform: translate(20px, 80px) scale(0.8) rotate(-10deg); }
  60% { transform: translate(-50px, 30px) scale(1.2) rotate(20deg); }
  80% { transform: translate(-30px, -20px) scale(0.9) rotate(-5deg); }
}
@keyframes blob-float-2 {
  0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
  25% { transform: translate(-80px, -60px) scale(1.4) rotate(-20deg); }
  50% { transform: translate(40px, -100px) scale(0.7) rotate(15deg); }
  75% { transform: translate(100px, -40px) scale(1.25) rotate(-10deg); }
}
@keyframes blob-float-3 {
  0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
  33% { transform: translate(-100px, 60px) scale(1.5) rotate(25deg); }
  66% { transform: translate(80px, -40px) scale(0.6) rotate(-30deg); }
}
@keyframes blob-float-4 {
  0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
  20% { transform: translate(-70px, 80px) scale(1.35) rotate(30deg); }
  40% { transform: translate(100px, 40px) scale(0.75) rotate(-25deg); }
  60% { transform: translate(30px, -60px) scale(1.2) rotate(15deg); }
  80% { transform: translate(-40px, 20px) scale(0.85) rotate(-10deg); }
}
@keyframes blob-float-5 {
  0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
  25% { transform: translate(80px, -50px) scale(1.4) rotate(20deg); }
  50% { transform: translate(-60px, 70px) scale(0.65) rotate(-35deg); }
  75% { transform: translate(50px, 40px) scale(1.3) rotate(10deg); }
}
</style>`;
}

function renderProfileSection(profile: ProfileDocument) {
  return `<section class="animate-blur-in col-span-1 flex min-h-[29rem] flex-col gap-2 rounded-2xl border border-white/5 bg-[#110f0e] p-2 md:col-span-1 lg:col-span-3" style="animation-delay: 200ms"><div class="relative h-[23rem] overflow-hidden rounded-xl bg-[#171412] md:h-[24rem] lg:h-[25rem]"><img src="${profile.portraitUrl}" alt="${profile.fullName}" class="absolute inset-0 h-full w-full object-cover" /><div class="absolute inset-0 bg-gradient-to-t from-[#110f0e] via-transparent to-transparent opacity-60"></div><div class="absolute bottom-4 left-4 right-4"><h3 class="text-lg font-bold text-white">${profile.fullName}</h3><p class="text-sm text-[#9d8a76]">${profile.city}, ${profile.country}</p></div></div><a href="#contact-popup" class="flex h-14 items-center justify-between rounded-xl border border-white/5 bg-[#171412] px-4 transition hover:bg-white/5"><div class="flex items-center gap-3"><span class="material-symbols-outlined text-[#9d8a76]">mail</span><span class="text-sm font-medium text-[#eaddcf]">${profile.email ?? "Me contacter"}</span></div><span class="material-symbols-outlined text-sm text-[#f48c25]">chevron_right</span></a></section>`;
}

function renderTopRow(data: PortfolioHomeViewModel) {
  return `<section class="col-span-1 grid grid-cols-1 gap-4 md:col-span-3 md:grid-cols-3 lg:col-span-4 lg:grid-cols-10">${renderHeroSection(data)}${renderProfileSection(data.profile)}</section>`;
}

function renderInfoRow(data: PortfolioHomeViewModel) {
  const educationCards = data.studies
    .map((education, index) => {
      const icon = index === 0 ? "school" : "history_edu";
      const iconStyle =
        index === 0
          ? "bg-[#f48c25]/10 text-[#f48c25]"
          : "bg-[#171412] text-[#9d8a76] group-hover:text-white";
      const delay = 300 + index * 100;

      const content = `<div class="mb-4 flex items-start justify-between"><div class="flex h-10 w-10 items-center justify-center rounded-lg ${iconStyle}"><span class="material-symbols-outlined">${icon}</span></div><span class="text-xs font-mono text-[#9d8a76]">${education.period.label}</span></div><h3 class="text-lg font-bold leading-tight text-[#eaddcf] transition-colors group-hover:text-[#f48c25]">${education.school}</h3><p class="mt-1 text-sm text-[#9d8a76]">${education.degree}</p>`;
      const cardLink = `<a href="#study/${education.id}" class="block h-full w-full">${content}<div class="mt-4 inline-flex items-center gap-1 text-xs font-medium uppercase tracking-wide text-[#9d8a76] transition group-hover:text-[#f48c25]"><span>Voir details</span><span class="material-symbols-outlined text-[14px]">arrow_outward</span></div></a>`;

      return UiCard({
        children: cardLink,
        className:
          "animate-blur-in group col-span-1 rounded-2xl border-white/5 bg-[#110f0e] p-6 transition-colors hover:border-[#f48c25]/30",
        style: `animation-delay: ${delay}ms`,
      });
    })
    .join("");

  const stack = data.skills
    .map((skill) => {
      const category =
        STACK_CATEGORY_META[skill.category] ?? STACK_CATEGORY_META.other;

      return `<div class="inline-flex h-11 shrink-0 items-center gap-2.5 rounded-xl border border-white/[0.08] bg-[#171412] px-4 text-sm transition-all duration-300 hover:border-[#f48c25]/35 hover:bg-[#1d1916]"><span class="inline-flex h-6 w-6 items-center justify-center rounded-lg bg-black/25 text-[#f48c25]"><span class="material-symbols-outlined text-[15px]">${skill.iconName ?? category.icon}</span></span><span class="font-semibold text-[#eaddcf]">${skill.name}</span><span class="text-[10px] font-medium uppercase tracking-wide text-[#9d8a76]">${category.label}</span></div>`;
    })
    .join("");

  const stackCard = UiCard({
    children: `<a href="#stack-detail" class="group flex h-full min-h-[11rem] flex-col"><div class="mb-4 flex items-end justify-between gap-3"><p class="text-xs font-bold uppercase tracking-wider text-[#9d8a76]">Core Stack</p><span class="rounded-full border border-[#f48c25]/25 bg-[#f48c25]/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-[#f48c25]">${data.skills.length} technologies</span></div><p class="mb-3 text-sm text-[#9d8a76]">Stack principale utilisee sur les projets recents.</p><div class="portfolio-stack-rail mt-auto space-y-2 pt-2"><div class="portfolio-stack-marquee"><div class="portfolio-stack-track">${stack}${stack}</div></div><div class="portfolio-stack-marquee"><div class="portfolio-stack-track portfolio-stack-track-reverse">${stack}${stack}</div></div></div><div class="mt-4 inline-flex items-center gap-1 text-xs font-medium uppercase tracking-wide text-[#9d8a76] transition group-hover:text-[#f48c25]"><span>Voir details</span><span class="material-symbols-outlined text-[14px]">arrow_outward</span></div></a>`,
    className:
      "animate-blur-in col-span-2 rounded-2xl border-white/5 bg-[#110f0e] p-6 transition-colors hover:border-[#f48c25]/30",
    style: "animation-delay: 500ms",
  });

  return `<section class="col-span-1 grid grid-cols-2 gap-4 md:col-span-3 lg:col-span-4 md:grid-cols-4">${educationCards}${stackCard}</section>`;
}

function renderProjectCards(
  data: PortfolioHomeViewModel,
  options?: { limit?: number; featuredOnly?: boolean },
) {
  const projectPool =
    options?.featuredOnly === false
      ? data.projects
      : data.projects.filter((project) => project.featured);
  const projectsToRender =
    typeof options?.limit === "number"
      ? projectPool.slice(0, options.limit)
      : projectPool;

  return projectsToRender
    .map((project, index) => {
      const tags = project.stack
        .slice(0, 2)
        .map(
          (item) =>
            `<span class="rounded bg-black/20 px-2 py-0.5 text-[10px] font-bold uppercase text-[#9d8a76]">${item}</span>`,
        )
        .join("");
      const delay = 600 + index * 80;

      return `<a href="#project/${project.slug}" class="animate-blur-in group flex h-32 gap-4 rounded-2xl border border-white/5 bg-[#110f0e] p-1 pr-6 transition-all duration-300 hover:border-[#f48c25]/20 hover:bg-[#171412]" style="animation-delay: ${delay}ms"><div class="h-full w-32 shrink-0 overflow-hidden rounded-xl bg-[#171412]"><img src="${project.cover.url}" alt="${project.title}" class="h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-100" /></div><div class="flex min-w-0 flex-1 flex-col justify-center py-2"><div class="mb-1 flex items-start justify-between"><h3 class="truncate text-lg font-bold text-[#eaddcf] transition-colors group-hover:text-[#f48c25]">${project.title}</h3><span class="material-symbols-outlined -rotate-45 text-sm text-[#9d8a76] transition-transform duration-300 group-hover:rotate-0">arrow_forward</span></div><p class="mb-3 line-clamp-2 text-sm text-[#9d8a76]">${project.shortDescription}</p><div class="flex gap-2">${tags}</div></div></a>`;
    })
    .join("");
}

function renderExperienceSection(data: PortfolioHomeViewModel) {
  const timeline = data.experiences
    .map((experience, index) => {
      const marker =
        index === 0
          ? "bg-[#f48c25] ring-[#110f0e]"
          : "border border-[#9d8a76] bg-[#171412] ring-[#110f0e]";

      return `<a href="#experience/${experience.id}" class="group relative block rounded-xl border border-transparent p-3 -m-3 transition-colors hover:border-[#f48c25]/20 hover:bg-[#171412]/50"><div class="relative border-l border-white/10 pl-6"><span class="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full ring-4 ${marker}"></span><div class="mb-1 flex items-baseline justify-between"><h4 class="text-lg font-bold text-[#eaddcf] transition-colors group-hover:text-[#f48c25]">${experience.role}</h4><span class="text-xs font-mono text-[#9d8a76]">${experience.period.label}</span></div><p class="mb-2 text-sm font-medium text-[#f48c25]">${experience.company}</p><p class="text-sm leading-relaxed text-[#9d8a76]">${experience.summary}</p></div></a>`;
    })
    .join("");

  const experienceCard = UiCard({
    children: timeline,
    className:
      "animate-blur-in flex flex-col gap-6 rounded-2xl border-white/5 bg-[#110f0e] p-6",
    style: "animation-delay: 700ms",
  });

  const freelanceCard = `<div class="animate-blur-in flex items-center justify-between rounded-2xl border border-white/5 bg-gradient-to-r from-[#171412] to-[#110f0e] p-5" style="animation-delay: 800ms"><div><p class="font-bold text-[#eaddcf]">Freelance Availability</p><p class="text-sm text-[#9d8a76]">${data.profile.availability}</p></div><a href="#contact-popup" class="h-10 rounded-lg border border-white/10 bg-white/5 px-5 text-sm font-medium text-white transition hover:bg-white/10 inline-flex items-center">Inquire</a></div>`;

  return `<section id="experience" class="flex flex-col gap-4"><div class="animate-blur-in flex items-center justify-between px-2" style="animation-delay: 650ms"><h2 class="flex items-center gap-2 text-xl font-bold text-[#eaddcf]"><span class="h-2 w-2 rounded-full bg-white/20"></span>Experience</h2><span class="text-xs font-medium text-[#9d8a76]">${data.stats.find((item) => item.id === "years")?.value ?? ""}</span></div>${experienceCard}${freelanceCard}</section>`;
}

function renderProjectsAndExperience(data: PortfolioHomeViewModel) {
  return `<section id="projects" class="col-span-1 mt-2 grid grid-cols-1 gap-4 md:col-span-3 lg:col-span-4 lg:grid-cols-2"><div class="flex flex-col gap-4"><div class="animate-blur-in flex items-center justify-between px-2" style="animation-delay: 550ms"><h2 class="flex items-center gap-2 text-xl font-bold text-[#eaddcf]"><span class="h-2 w-2 rounded-full bg-[#f48c25]"></span>Selected Projects</h2><a href="#projects-all" class="inline-flex items-center gap-1.5 rounded-full border border-[#f48c25]/35 bg-[#f48c25]/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-[#f48c25] transition hover:border-[#f48c25]/60 hover:bg-[#f48c25]/20"><span>Voir tous les projets</span><span class="material-symbols-outlined text-[14px]">arrow_outward</span></a></div>${renderProjectCards(data, { limit: 4 })}</div>${renderExperienceSection(data)}</section>`;
}

function renderAllProjectsModal(data: PortfolioHomeViewModel, isOpen: boolean) {
  if (!isOpen) {
    return "";
  }

  const body = `<div class="mb-4 flex items-center justify-between rounded-2xl border border-white/[0.08] bg-white/[0.03] px-4 py-3"><p class="text-sm text-[#9d8a76]">Clique sur un projet pour ouvrir sa detail card.</p><span class="rounded-full border border-[#f48c25]/25 bg-[#f48c25]/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-[#f48c25]">${data.projects.length} projets</span></div><div class="max-h-[62vh] space-y-3 overflow-y-auto pr-1">${renderProjectCards(data, { featuredOnly: false })}</div>`;

  return renderDetailModalShell({
    kicker: "Projects",
    title: "Tous les projets",
    body,
    maxWidth: "max-w-3xl",
  });
}

function renderDetailModalShell({
  kicker,
  title,
  body,
  maxWidth = "max-w-2xl",
}: {
  kicker: string;
  title: string;
  body: string;
  maxWidth?: string;
}) {
  return `<div class="modal-root fixed inset-0 z-50 flex items-center justify-center p-4"><a href="#" class="modal-backdrop absolute inset-0 bg-black/55"></a><div class="modal-card glass-panel relative w-full ${maxWidth} overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-[#eaddcf] shadow-[0_32px_96px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-[28px]"><div class="relative z-10"><div class="mb-5 flex items-start justify-between gap-4"><div><p class="text-xs font-semibold uppercase tracking-[0.22em] text-[#f48c25]">${kicker}</p><h3 class="mt-2 text-2xl font-black tracking-tight text-[#eaddcf]">${title}</h3></div><a href="#" class="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm font-medium text-[#eaddcf] transition hover:border-[#f48c25]/40 hover:bg-[#f48c25]/10 hover:text-[#f48c25]">Fermer</a></div>${body}</div></div></div>`;
}

function renderProjectDetailModal(
  project: ProjectDocument | null,
  slug: string | null,
) {
  if (!slug) {
    return "";
  }

  const body = project
    ? `<div class="mb-4 overflow-hidden rounded-2xl border border-white/[0.08]"><img src="${project.cover.url}" alt="${project.cover.alt}" class="h-52 w-full object-cover" /></div><div class="mb-4 flex flex-wrap gap-2">${project.stack.map((item) => `<span class="rounded-xl border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-xs text-[#eaddcf]">${item}</span>`).join("")}</div><p class="mb-4 text-sm leading-relaxed text-[#9d8a76]">${project.longDescription ?? project.shortDescription}</p>${(project.sections ?? []).map((section) => `<div class="mb-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3"><h4 class="mb-1 text-sm font-bold text-[#eaddcf]">${section.title}</h4><p class="text-sm text-[#9d8a76]">${section.body}</p></div>`).join("")}`
    : `<p class="text-sm text-[#9d8a76]">Chargement du projet ${slug}...</p>`;

  return renderDetailModalShell({
    kicker: "Project detail",
    title: project?.title ?? slug,
    body,
  });
}

function renderExperienceDetailModal(
  experience: ExperienceDocument | null,
  experienceId: string | null,
) {
  if (!experienceId) {
    return "";
  }

  const body = experience
    ? `<div class="mb-4 grid gap-3 sm:grid-cols-3"><div class="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-3"><p class="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9d8a76]">Entreprise</p><p class="mt-2 text-sm font-semibold text-[#eaddcf]">${experience.company}</p></div><div class="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-3"><p class="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9d8a76]">Periode</p><p class="mt-2 text-sm font-semibold text-[#eaddcf]">${experience.period.label}</p></div><div class="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-3"><p class="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9d8a76]">Cadre</p><p class="mt-2 text-sm font-semibold text-[#eaddcf]">${experience.locationMode ?? "non precise"}</p></div></div><p class="mb-4 text-sm leading-relaxed text-[#9d8a76]">${experience.summary}</p>${experience.location ? `<div class="mb-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3"><p class="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9d8a76]">Localisation</p><p class="mt-2 text-sm text-[#eaddcf]">${experience.location}</p></div>` : ""}${experience.achievements && experience.achievements.length > 0 ? `<div class="mb-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4"><h4 class="mb-2 text-sm font-bold text-[#eaddcf]">Realisations cles</h4><ul class="space-y-2">${experience.achievements.map((achievement) => `<li class="flex items-start gap-2 text-sm text-[#9d8a76]"><span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f48c25]"></span><span>${achievement}</span></li>`).join("")}</ul></div>` : ""}${experience.stack && experience.stack.length > 0 ? `<div class="flex flex-wrap gap-2">${experience.stack.map((item) => `<span class="rounded-xl border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-xs text-[#eaddcf]">${item}</span>`).join("")}</div>` : ""}`
    : `<p class="text-sm text-[#9d8a76]">Experience ${experienceId} introuvable.</p>`;

  return renderDetailModalShell({
    kicker: "Experience detail",
    title: experience?.role ?? experienceId,
    body,
  });
}

function renderStudyDetailModal(
  study: StudyDocument | null,
  studyId: string | null,
) {
  if (!studyId) {
    return "";
  }

  const body = study
    ? `<div class="mb-4 grid gap-3 sm:grid-cols-2"><div class="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-3"><p class="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9d8a76]">Etablissement</p><p class="mt-2 text-sm font-semibold text-[#eaddcf]">${study.school}</p></div><div class="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-3"><p class="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9d8a76]">Periode</p><p class="mt-2 text-sm font-semibold text-[#eaddcf]">${study.period.label}</p></div></div><p class="mb-4 text-sm leading-relaxed text-[#9d8a76]">${study.degree}</p>${study.degreeLevel ? `<div class="mb-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3"><p class="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9d8a76]">Niveau</p><p class="mt-2 text-sm text-[#eaddcf]">${study.degreeLevel}</p></div>` : ""}${study.location ? `<div class="mb-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3"><p class="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9d8a76]">Localisation</p><p class="mt-2 text-sm text-[#eaddcf]">${study.location}</p></div>` : ""}${study.highlights && study.highlights.length > 0 ? `<div class="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4"><h4 class="mb-2 text-sm font-bold text-[#eaddcf]">Points forts</h4><ul class="space-y-2">${study.highlights.map((highlight) => `<li class="flex items-start gap-2 text-sm text-[#9d8a76]"><span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f48c25]"></span><span>${highlight}</span></li>`).join("")}</ul></div>` : ""}`
    : `<p class="text-sm text-[#9d8a76]">Etude ${studyId} introuvable.</p>`;

  return renderDetailModalShell({
    kicker: "Study detail",
    title: study?.school ?? studyId,
    body,
  });
}

function renderStackDetailModal(data: PortfolioHomeViewModel, isOpen: boolean) {
  if (!isOpen) {
    return "";
  }

  const groupedSkills = data.skills.reduce<Record<string, typeof data.skills>>(
    (acc, skill) => {
      const key = skill.category;
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(skill);
      return acc;
    },
    {},
  );

  const body = `${Object.entries(groupedSkills)
    .map(([categoryKey, skills]) => {
      const category =
        STACK_CATEGORY_META[
          categoryKey as NonNullable<
            PortfolioHomeViewModel["skills"][number]["category"]
          >
        ] ?? STACK_CATEGORY_META.other;

      return `<div class="mb-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4"><div class="mb-3 flex items-center gap-2"><span class="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-[#f48c25]/10 text-[#f48c25]"><span class="material-symbols-outlined text-[16px]">${category.icon}</span></span><h4 class="text-sm font-bold text-[#eaddcf]">${category.label}</h4></div><div class="flex flex-wrap gap-2">${skills
        .map(
          (skill) =>
            `<span class="rounded-xl border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-xs text-[#eaddcf]">${skill.name}${skill.level ? ` - ${skill.level}` : ""}</span>`,
        )
        .join("")}</div></div>`;
    })
    .join("")}`;

  return renderDetailModalShell({
    kicker: "Core stack",
    title: `${data.skills.length} technologies maitrisees`,
    body,
    maxWidth: "max-w-3xl",
  });
}

function renderContactModal(profile: ProfileDocument, isOpen: boolean) {
  if (!isOpen) {
    return "";
  }

  const primaryLink = profile.links.find((link) => link.type === "linkedin");

  return `<div class="modal-root fixed inset-0 z-50 flex items-center justify-center p-4"><a href="#" class="modal-backdrop absolute inset-0 bg-black/55"></a><div class="modal-card glass-panel relative w-full max-w-lg overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-[#eaddcf] shadow-[0_32px_96px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-[28px]"><div class="relative z-10"><div class="mb-5 flex items-start justify-between gap-4"><div><p class="text-xs font-semibold uppercase tracking-[0.22em] text-[#f48c25]">Contact</p><h3 class="mt-2 text-2xl font-black tracking-tight text-[#eaddcf]">${profile.fullName}</h3><p class="mt-1 text-sm text-[#9d8a76]">Disponible pour projets freelance et missions Full-Stack.</p></div><a href="#" class="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm font-medium text-[#eaddcf] transition hover:border-[#f48c25]/40 hover:bg-[#f48c25]/10 hover:text-[#f48c25]">Fermer</a></div><div class="space-y-3"><a href="mailto:${profile.email ?? ""}" class="group flex items-center justify-between rounded-2xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 transition hover:border-[#f48c25]/30 hover:bg-white/[0.07]"><span class="text-sm text-[#eaddcf]">${profile.email ?? "Email"}</span><span class="material-symbols-outlined text-sm text-[#f48c25] transition group-hover:translate-x-0.5">arrow_outward</span></a><a href="tel:${profile.phone ?? ""}" class="group flex items-center justify-between rounded-2xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 transition hover:border-[#f48c25]/30 hover:bg-white/[0.07]"><span class="text-sm text-[#eaddcf]">${profile.phone ?? "Telephone"}</span><span class="material-symbols-outlined text-sm text-[#f48c25] transition group-hover:translate-x-0.5">call</span></a>${primaryLink ? `<a href="${primaryLink.url}" ${primaryLink.openInNewTab ? 'target="_blank" rel="noreferrer"' : ""} class="group flex items-center justify-between rounded-2xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 transition hover:border-[#f48c25]/30 hover:bg-white/[0.07]"><span class="text-sm text-[#eaddcf]">LinkedIn</span><span class="material-symbols-outlined text-sm text-[#f48c25] transition group-hover:translate-x-0.5">arrow_outward</span></a>` : ""}</div><p class="mt-4 text-xs text-[#9d8a76]">Reponse rapide sous 24h en semaine.</p></div></div></div>`;
}

export function renderPortfolioPage(
  data: PortfolioHomeViewModel,
  activeProject: ProjectDocument | null,
  activeSlug: string | null,
  activeExperience: ExperienceDocument | null,
  activeExperienceId: string | null,
  activeStudy: StudyDocument | null,
  activeStudyId: string | null,
  isStackDetailOpen: boolean,
  isAllProjectsListOpen: boolean,
  isContactPopupOpen: boolean,
) {
  return `<div class="relative min-h-screen bg-[#060606] text-[#eaddcf]"><div class="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#120d09] via-[#080808] to-[#060606]"></div><div class="pointer-events-none absolute inset-0 bg-grid-pattern"></div><div class="pointer-events-none absolute inset-0 overflow-hidden"><div class="bg-glow bg-glow-1"></div><div class="bg-glow bg-glow-2"></div><div class="bg-glow bg-glow-3"></div></div><div class="relative z-10">${renderHeader(data.profile)}<main class="mx-auto grid w-full max-w-6xl grid-cols-1 gap-4 px-4 py-12 md:grid-cols-3 lg:grid-cols-4">${renderTopRow(data)}${renderInfoRow(data)}${renderProjectsAndExperience(data)}</main></div>${renderProjectDetailModal(activeProject, activeSlug)}${renderExperienceDetailModal(activeExperience, activeExperienceId)}${renderStudyDetailModal(activeStudy, activeStudyId)}${renderStackDetailModal(data, isStackDetailOpen)}${renderAllProjectsModal(data, isAllProjectsListOpen)}${renderContactModal(data.profile, isContactPopupOpen)}</div><style>
.portfolio-stack-marquee {
  position: relative;
  overflow: hidden;
  mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
}
.portfolio-stack-track {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  width: max-content;
  padding-right: 0.7rem;
  animation: stack-marquee 34s linear infinite;
}
.portfolio-stack-track-reverse {
  animation-direction: reverse;
}
.portfolio-stack-rail:hover .portfolio-stack-track {
  animation-play-state: paused;
}
.bg-grid-pattern {
  background-image: 
    linear-gradient(rgba(244,140,37,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(244,140,37,0.04) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%);
}
.bg-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  will-change: transform;
}
.bg-glow-1 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(244,140,37,0.22) 0%, transparent 70%);
  top: -200px;
  left: -150px;
  animation: bg-drift-1 30s ease-in-out infinite;
}
.bg-glow-2 {
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(26,18,11,0.6) 0%, transparent 70%);
  bottom: -250px;
  right: -200px;
  animation: bg-drift-2 40s ease-in-out infinite;
}
.bg-glow-3 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(244,140,37,0.15) 0%, transparent 70%);
  top: 40%;
  left: 40%;
  animation: bg-drift-3 35s ease-in-out infinite;
}
.glass-panel {
  box-shadow:
    0 0 0 1px rgba(255, 255, 255, 0.05) inset,
    0 0 0 1px rgba(244, 140, 37, 0.08),
    0 32px 96px rgba(0, 0, 0, 0.65),
    0 12px 48px rgba(0, 0, 0, 0.45),
    inset 0 1px 0 rgba(255, 255, 255, 0.04);
  background-image: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.08) 0%,
    rgba(255, 255, 255, 0.02) 50%,
    rgba(255, 255, 255, 0.04) 100%
  );
}
.modal-backdrop {
  animation: modal-fade-in 450ms ease-out;
}
.modal-card {
  transform-origin: 50% 60%;
  animation: modal-card-in 550ms cubic-bezier(0.2, 0.9, 0.25, 1);
}
@keyframes modal-fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes modal-card-in {
  from {
    opacity: 0;
    transform: translateY(18px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
@keyframes bg-drift-1 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(100px, 80px) scale(1.1); }
}
@keyframes bg-drift-2 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(-80px, -60px) scale(1.15); }
}
@keyframes bg-drift-3 {
  0%, 100% { transform: translate(-50%, -50%) scale(1); }
  50% { transform: translate(-50%, -50%) scale(1.3); }
}
@keyframes stack-marquee {
  from { transform: translateX(0); }
  to { transform: translateX(calc(-50% - 0.35rem)); }
}
.animate-blur-in {
  animation: blur-in 0.6s cubic-bezier(0.2, 0.9, 0.25, 1) both;
}

#app.no-entry-animations .animate-blur-in {
  animation: none !important;
  opacity: 1 !important;
  transform: none !important;
  filter: blur(0) !important;
}

@keyframes blur-in {
  from {
    opacity: 0;
    transform: scale(1.1);
    filter: blur(20px);
  }
  to {
    opacity: 1;
    transform: scale(1);
    filter: blur(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .portfolio-stack-track {
    animation: none;
  }
}
</style>`;
}

export function renderWelcomeScreen() {
  return `<div id="welcome-screen" class="fixed inset-0 z-[100] flex items-center justify-center bg-[#060606] overflow-hidden">
  <div class="welcome-hero-bg">
    <div class="welcome-hero-blob welcome-hero-blob-1"></div>
    <div class="welcome-hero-blob welcome-hero-blob-2"></div>
    <div class="welcome-hero-blob welcome-hero-blob-3"></div>
    <div class="welcome-hero-blob welcome-hero-blob-4"></div>
    <div class="welcome-hero-blob welcome-hero-blob-5"></div>
    <div class="welcome-hero-overlay"></div>
  </div>
  <div class="welcome-blackout"></div>
  <div class="relative z-10 text-center">
    <h1 id="welcome-text" class="text-5xl md:text-7xl font-black text-[#eaddcf] tracking-tight">
      <span id="typed-text"></span><span class="typed-cursor">|</span>
    </h1>
  </div>
</div>
<style>
.typed-cursor {
  animation: cursor-blink 1s step-end infinite;
  color: #f48c25;
  font-weight: 300;
}

@keyframes cursor-blink {
  0%,
  50% {
    opacity: 1;
  }
  51%,
  100% {
    opacity: 0;
  }
}

.welcome-hero-bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: linear-gradient(145deg, #0b0908 0%, #1a120b 42%, #241307 100%);
}

.welcome-hero-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  mix-blend-mode: multiply;
  will-change: transform;
}

.welcome-hero-blob-1 {
  width: 520px;
  height: 520px;
  background: radial-gradient(circle, rgba(244, 140, 37, 0.52) 0%, rgba(212, 116, 10, 0.34) 46%, transparent 72%);
  top: -180px;
  left: -160px;
  animation: welcome-hero-float-1 12s ease-in-out infinite;
}

.welcome-hero-blob-2 {
  width: 820px;
  height: 820px;
  background: radial-gradient(circle, rgba(8, 7, 6, 0.96) 0%, rgba(6, 5, 4, 0.9) 62%, transparent 80%);
  bottom: -320px;
  right: -300px;
  animation: welcome-hero-float-2 14s ease-in-out infinite;
  mix-blend-mode: normal;
}

.welcome-hero-blob-3 {
  width: 420px;
  height: 420px;
  background: radial-gradient(circle, rgba(244, 140, 37, 0.34) 0%, rgba(212, 116, 10, 0.2) 45%, transparent 72%);
  top: 30%;
  left: 24%;
  animation: welcome-hero-float-3 10s ease-in-out infinite;
}

.welcome-hero-blob-4 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(12, 10, 9, 0.92) 0%, rgba(8, 7, 6, 0.76) 56%, transparent 78%);
  top: 10%;
  right: -4%;
  animation: welcome-hero-float-4 16s ease-in-out infinite;
  mix-blend-mode: normal;
}

.welcome-hero-blob-5 {
  width: 360px;
  height: 360px;
  background: radial-gradient(circle, rgba(244, 140, 37, 0.32) 0%, rgba(212, 116, 10, 0.18) 52%, transparent 76%);
  bottom: 12%;
  left: 4%;
  animation: welcome-hero-float-5 11s ease-in-out infinite;
  opacity: 0.62;
}

.welcome-hero-overlay {
  pointer-events: none;
  position: absolute;
  inset: 0;
  background:
    radial-gradient(95% 80% at 15% 12%, rgba(244, 140, 37, 0.16) 0%, transparent 52%),
    radial-gradient(120% 120% at 70% 90%, rgba(0, 0, 0, 0.45) 0%, transparent 56%),
    linear-gradient(to top, rgba(0, 0, 0, 0.52), rgba(0, 0, 0, 0.18) 45%, transparent 100%);
}

.welcome-blackout {
  pointer-events: none;
  position: absolute;
  inset: 0;
  z-index: 8;
  background: #060606;
  opacity: 0;
}

#welcome-screen.exit-glitch #welcome-text {
  animation: welcome-glitch 1800ms linear both;
}

#welcome-screen.exit-glitch .typed-cursor {
  animation: cursor-glitch 680ms step-end infinite;
}

#welcome-screen.exit-glitch .welcome-hero-blob-2 {
  animation: welcome-dark-spot-expand 1400ms cubic-bezier(0.22, 0.86, 0.32, 1) forwards !important;
}

#welcome-screen.exit-burst .welcome-blackout {
  animation: welcome-black-fade 320ms ease-in forwards;
}

@keyframes welcome-hero-float-1 {
  0%,
  100% {
    transform: translate(0, 0) scale(1) rotate(0deg);
  }
  20% {
    transform: translate(60px, 40px) scale(1.3) rotate(15deg);
  }
  40% {
    transform: translate(20px, 80px) scale(0.8) rotate(-10deg);
  }
  60% {
    transform: translate(-50px, 30px) scale(1.2) rotate(20deg);
  }
  80% {
    transform: translate(-30px, -20px) scale(0.9) rotate(-5deg);
  }
}

@keyframes welcome-hero-float-2 {
  0%,
  100% {
    transform: translate(0, 0) scale(1) rotate(0deg);
  }
  25% {
    transform: translate(-80px, -60px) scale(1.4) rotate(-20deg);
  }
  50% {
    transform: translate(40px, -100px) scale(0.7) rotate(15deg);
  }
  75% {
    transform: translate(100px, -40px) scale(1.25) rotate(-10deg);
  }
}

@keyframes welcome-hero-float-3 {
  0%,
  100% {
    transform: translate(0, 0) scale(1) rotate(0deg);
  }
  33% {
    transform: translate(-100px, 60px) scale(1.5) rotate(25deg);
  }
  66% {
    transform: translate(80px, -40px) scale(0.6) rotate(-30deg);
  }
}

@keyframes welcome-hero-float-4 {
  0%,
  100% {
    transform: translate(0, 0) scale(1) rotate(0deg);
  }
  20% {
    transform: translate(-70px, 80px) scale(1.35) rotate(30deg);
  }
  40% {
    transform: translate(100px, 40px) scale(0.75) rotate(-25deg);
  }
  60% {
    transform: translate(30px, -60px) scale(1.2) rotate(15deg);
  }
  80% {
    transform: translate(-40px, 20px) scale(0.85) rotate(-10deg);
  }
}

@keyframes welcome-hero-float-5 {
  0%,
  100% {
    transform: translate(0, 0) scale(1) rotate(0deg);
  }
  25% {
    transform: translate(80px, -50px) scale(1.4) rotate(20deg);
  }
  50% {
    transform: translate(-60px, 70px) scale(0.65) rotate(-35deg);
  }
  75% {
    transform: translate(50px, 40px) scale(1.3) rotate(10deg);
  }
}

@keyframes welcome-glitch {
  0%,
  19.999% {
    opacity: 1;
  }
  20%,
  34.999% {
    opacity: 0;
  }
  35%,
  49.999% {
    opacity: 1;
  }
  50%,
  64.999% {
    opacity: 0;
  }
  65%,
  74.999% {
    opacity: 1;
  }
  75%,
  100% {
    opacity: 0;
  }
}

@keyframes cursor-glitch {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

@keyframes welcome-dark-spot-expand {
  0% {
    opacity: 1;
    transform: translate(0, 0) scale(1);
    filter: blur(60px);
  }
  80% {
    opacity: 1;
    transform: translate(-80px, -55px) scale(7.5);
    filter: blur(90px);
  }
  100% {
    opacity: 1;
    transform: translate(-120px, -85px) scale(12.5);
    filter: blur(120px);
  }
}

@keyframes welcome-black-fade {
  0% {
    opacity: 0;
  }
  45% {
    opacity: 0.16;
  }
  100% {
    opacity: 1;
  }
}
</style>`;
}
