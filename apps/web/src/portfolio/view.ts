import { UiCard } from "@repo/ui/card";

import type {
  PortfolioHomeViewModel,
  ProfileDocument,
  ProjectDocument,
} from "./model";

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
  return `<header class="sticky top-4 z-40 w-full"><div class="mx-auto flex h-14 max-w-fit items-center justify-between gap-6 rounded-full border border-white/10 bg-white/5 px-6 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)]"><div class="flex items-center gap-2 text-[#eaddcf]"><span class="material-symbols-outlined text-[#f48c25]">terminal</span><span class="text-lg font-bold tracking-tight">${profile.firstName.toUpperCase()}.DEV</span></div><div class="h-5 w-px bg-white/10"></div><nav class="hidden items-center gap-1 md:flex"><a href="#projects" class="rounded-full px-4 py-1.5 text-sm font-medium text-[#9d8a76] transition hover:bg-white/5 hover:text-[#eaddcf]">Projects</a><a href="#experience" class="rounded-full px-4 py-1.5 text-sm font-medium text-[#9d8a76] transition hover:bg-white/5 hover:text-[#eaddcf]">Experience</a><a href="#contact-popup" class="rounded-full px-4 py-1.5 text-sm font-medium text-[#9d8a76] transition hover:bg-white/5 hover:text-[#eaddcf]">Contact</a></nav><div class="h-5 w-px bg-white/10"></div><div class="flex items-center gap-2"><a href="#contact-popup" class="inline-flex h-8 items-center justify-center rounded-full bg-gradient-to-r from-[#f48c25] to-[#d4740a] px-4 text-sm font-semibold text-[#1a120b] transition hover:shadow-[0_0_20px_rgba(244,140,37,0.5)] hover:scale-105"><span class="material-symbols-outlined mr-1.5 text-[16px]">mail</span>Contact</a>${renderSocialIconButtons(profile)}</div></div></header>`;
}

function renderHeroSection(data: PortfolioHomeViewModel) {
  return `<section class="relative col-span-1 flex min-h-[29rem] flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br from-[#f48c25] via-[#d4740a] to-[#1a120b] p-8 md:col-span-2 lg:col-span-7"><div class="pointer-events-none absolute inset-0 overflow-hidden"><div class="hero-blob hero-blob-1"></div><div class="hero-blob hero-blob-2"></div><div class="hero-blob hero-blob-3"></div><div class="hero-blob hero-blob-4"></div><div class="hero-blob hero-blob-5"></div></div><div class="relative z-10"><div class="mb-6 inline-flex items-center rounded-full border border-black/10 bg-black/20 px-3 py-1 text-xs font-medium text-black backdrop-blur-sm"><span class="mr-2 flex h-2 w-2 rounded-full bg-black"></span>${data.profile.availability}</div><h1 class="text-4xl font-black uppercase leading-[0.9] tracking-tighter text-[#1a120b] md:text-5xl lg:text-6xl">${data.profile.heroTitle}</h1></div><div class="relative z-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end"><p class="max-w-md text-lg font-medium leading-relaxed text-[#1a120b]/80">${data.profile.aboutShort}</p><a href="#projects" class="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#1a120b] text-[#f48c25] transition hover:scale-110"><span class="material-symbols-outlined">arrow_outward</span></a></div><div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div></section><style>
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
  return `<section class="col-span-1 flex min-h-[29rem] flex-col gap-2 rounded-2xl border border-white/5 bg-[#110f0e] p-2 md:col-span-1 lg:col-span-3"><div class="relative h-[23rem] overflow-hidden rounded-xl bg-[#171412] md:h-[24rem] lg:h-[25rem]"><img src="${profile.portraitUrl}" alt="${profile.fullName}" class="absolute inset-0 h-full w-full object-cover" /><div class="absolute inset-0 bg-gradient-to-t from-[#110f0e] via-transparent to-transparent opacity-60"></div><div class="absolute bottom-4 left-4 right-4"><h3 class="text-lg font-bold text-white">${profile.fullName}</h3><p class="text-sm text-[#9d8a76]">${profile.city}, ${profile.country}</p></div></div><a href="#contact-popup" class="flex h-14 items-center justify-between rounded-xl border border-white/5 bg-[#171412] px-4 transition hover:bg-white/5"><div class="flex items-center gap-3"><span class="material-symbols-outlined text-[#9d8a76]">mail</span><span class="text-sm font-medium text-[#eaddcf]">${profile.email ?? "Me contacter"}</span></div><span class="material-symbols-outlined text-sm text-[#f48c25]">chevron_right</span></a></section>`;
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

      const content = `<div class="mb-4 flex items-start justify-between"><div class="flex h-10 w-10 items-center justify-center rounded-lg ${iconStyle}"><span class="material-symbols-outlined">${icon}</span></div><span class="text-xs font-mono text-[#9d8a76]">${education.period.label}</span></div><h3 class="text-lg font-bold leading-tight text-[#eaddcf] transition-colors group-hover:text-[#f48c25]">${education.school}</h3><p class="mt-1 text-sm text-[#9d8a76]">${education.degree}</p>`;

      return UiCard({
        children: content,
        className:
          "group col-span-1 rounded-2xl border-white/5 bg-[#110f0e] p-6 transition-colors hover:border-[#f48c25]/30",
      });
    })
    .join("");

  const stack = data.skills
    .map(
      (skill) =>
        `<span class="rounded border border-white/5 bg-[#171412] px-3 py-1.5 text-xs font-medium text-[#eaddcf]">${skill.name}</span>`,
    )
    .join("");

  const stackCard = UiCard({
    children: `<p class="mb-3 text-xs font-bold uppercase tracking-wider text-[#9d8a76]">Core Stack</p><div class="flex flex-wrap gap-2">${stack}</div>`,
    className: "col-span-2 rounded-2xl border-white/5 bg-[#110f0e] p-6",
  });

  return `<section class="col-span-1 grid grid-cols-2 gap-4 md:col-span-3 lg:col-span-4 md:grid-cols-4">${educationCards}${stackCard}</section>`;
}

function renderProjectCards(data: PortfolioHomeViewModel) {
  return data.projects
    .filter((project) => project.featured)
    .slice(0, 4)
    .map((project) => {
      const tags = project.stack
        .slice(0, 2)
        .map(
          (item) =>
            `<span class="rounded bg-black/20 px-2 py-0.5 text-[10px] font-bold uppercase text-[#9d8a76]">${item}</span>`,
        )
        .join("");

      return `<a href="#project/${project.slug}" class="group flex h-32 gap-4 rounded-2xl border border-white/5 bg-[#110f0e] p-1 pr-6 transition-all duration-300 hover:border-[#f48c25]/20 hover:bg-[#171412]"><div class="h-full w-32 shrink-0 overflow-hidden rounded-xl bg-[#171412]"><img src="${project.cover.url}" alt="${project.title}" class="h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-100" /></div><div class="flex min-w-0 flex-1 flex-col justify-center py-2"><div class="mb-1 flex items-start justify-between"><h3 class="truncate text-lg font-bold text-[#eaddcf] transition-colors group-hover:text-[#f48c25]">${project.title}</h3><span class="material-symbols-outlined -rotate-45 text-sm text-[#9d8a76] transition-transform duration-300 group-hover:rotate-0">arrow_forward</span></div><p class="mb-3 line-clamp-2 text-sm text-[#9d8a76]">${project.shortDescription}</p><div class="flex gap-2">${tags}</div></div></a>`;
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

      return `<div class="relative border-l border-white/10 pl-6"><span class="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full ring-4 ${marker}"></span><div class="mb-1 flex items-baseline justify-between"><h4 class="text-lg font-bold text-[#eaddcf]">${experience.role}</h4><span class="text-xs font-mono text-[#9d8a76]">${experience.period.label}</span></div><p class="mb-2 text-sm font-medium text-[#f48c25]">${experience.company}</p><p class="text-sm leading-relaxed text-[#9d8a76]">${experience.summary}</p></div>`;
    })
    .join("");

  const experienceCard = UiCard({
    children: timeline,
    className:
      "flex flex-col gap-6 rounded-2xl border-white/5 bg-[#110f0e] p-6",
  });

  const freelanceCard = `<div class="flex items-center justify-between rounded-2xl border border-white/5 bg-gradient-to-r from-[#171412] to-[#110f0e] p-5"><div><p class="font-bold text-[#eaddcf]">Freelance Availability</p><p class="text-sm text-[#9d8a76]">${data.profile.availability}</p></div><a href="#contact-popup" class="h-10 rounded-lg border border-white/10 bg-white/5 px-5 text-sm font-medium text-white transition hover:bg-white/10 inline-flex items-center">Inquire</a></div>`;

  return `<section id="experience" class="flex flex-col gap-4"><div class="flex items-center justify-between px-2"><h2 class="flex items-center gap-2 text-xl font-bold text-[#eaddcf]"><span class="h-2 w-2 rounded-full bg-white/20"></span>Experience</h2><span class="text-xs font-medium text-[#9d8a76]">${data.stats.find((item) => item.id === "years")?.value ?? ""}</span></div>${experienceCard}${freelanceCard}</section>`;
}

function renderProjectsAndExperience(data: PortfolioHomeViewModel) {
  return `<section id="projects" class="col-span-1 mt-2 grid grid-cols-1 gap-4 md:col-span-3 lg:col-span-4 lg:grid-cols-2"><div class="flex flex-col gap-4"><div class="flex items-center justify-between px-2"><h2 class="flex items-center gap-2 text-xl font-bold text-[#eaddcf]"><span class="h-2 w-2 rounded-full bg-[#f48c25]"></span>Selected Projects</h2><span class="text-xs font-medium text-[#9d8a76]">Click to open details</span></div>${renderProjectCards(data)}</div>${renderExperienceSection(data)}</section>`;
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

  return `<div class="fixed inset-0 z-50 flex items-center justify-center p-4"><a href="#" class="absolute inset-0 bg-black/55"></a><div class="glass-panel relative w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-[#eaddcf] shadow-[0_32px_96px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-[28px]"><div class="relative z-10"><div class="mb-5 flex items-start justify-between gap-4"><div><p class="text-xs font-semibold uppercase tracking-[0.22em] text-[#f48c25]">Project detail</p><h3 class="mt-2 text-2xl font-black tracking-tight text-[#eaddcf]">${project?.title ?? slug}</h3></div><a href="#" class="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm font-medium text-[#eaddcf] transition hover:border-[#f48c25]/40 hover:bg-[#f48c25]/10 hover:text-[#f48c25]">Fermer</a></div>${body}</div></div></div>`;
}

function renderContactModal(profile: ProfileDocument, isOpen: boolean) {
  if (!isOpen) {
    return "";
  }

  const primaryLink = profile.links.find((link) => link.type === "linkedin");

  return `<div class="fixed inset-0 z-50 flex items-center justify-center p-4"><a href="#" class="absolute inset-0 bg-[#030303]/55"></a><div class="glass-panel relative w-full max-w-lg overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-[#eaddcf] shadow-[0_32px_96px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-[28px]"><div class="relative z-10"><div class="mb-5 flex items-start justify-between gap-4"><div><p class="text-xs font-semibold uppercase tracking-[0.22em] text-[#f48c25]">Contact</p><h3 class="mt-2 text-2xl font-black tracking-tight text-[#eaddcf]">${profile.fullName}</h3><p class="mt-1 text-sm text-[#9d8a76]">Disponible pour projets freelance et missions Full-Stack.</p></div><a href="#" class="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm font-medium text-[#eaddcf] transition hover:border-[#f48c25]/40 hover:bg-[#f48c25]/10 hover:text-[#f48c25]">Fermer</a></div><div class="space-y-3"><a href="mailto:${profile.email ?? ""}" class="group flex items-center justify-between rounded-2xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 transition hover:border-[#f48c25]/30 hover:bg-white/[0.07]"><span class="text-sm text-[#eaddcf]">${profile.email ?? "Email"}</span><span class="material-symbols-outlined text-sm text-[#f48c25] transition group-hover:translate-x-0.5">arrow_outward</span></a><a href="tel:${profile.phone ?? ""}" class="group flex items-center justify-between rounded-2xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 transition hover:border-[#f48c25]/30 hover:bg-white/[0.07]"><span class="text-sm text-[#eaddcf]">${profile.phone ?? "Telephone"}</span><span class="material-symbols-outlined text-sm text-[#f48c25] transition group-hover:translate-x-0.5">call</span></a>${primaryLink ? `<a href="${primaryLink.url}" ${primaryLink.openInNewTab ? 'target="_blank" rel="noreferrer"' : ""} class="group flex items-center justify-between rounded-2xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 transition hover:border-[#f48c25]/30 hover:bg-white/[0.07]"><span class="text-sm text-[#eaddcf]">LinkedIn</span><span class="material-symbols-outlined text-sm text-[#f48c25] transition group-hover:translate-x-0.5">arrow_outward</span></a>` : ""}</div><p class="mt-4 text-xs text-[#9d8a76]">Reponse rapide sous 24h en semaine.</p></div></div></div>`;
}

export function renderPortfolioPage(
  data: PortfolioHomeViewModel,
  activeProject: ProjectDocument | null,
  activeSlug: string | null,
  isContactPopupOpen: boolean,
) {
  return `<div class="relative min-h-screen bg-[#060606] text-[#eaddcf]"><div class="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#120d09] via-[#080808] to-[#060606]"></div><div class="pointer-events-none absolute inset-0 bg-grid-pattern"></div><div class="pointer-events-none absolute inset-0 overflow-hidden"><div class="bg-glow bg-glow-1"></div><div class="bg-glow bg-glow-2"></div><div class="bg-glow bg-glow-3"></div></div><div class="relative z-10">${renderHeader(data.profile)}<main class="mx-auto grid w-full max-w-6xl grid-cols-1 gap-4 px-4 py-12 md:grid-cols-3 lg:grid-cols-4">${renderTopRow(data)}${renderInfoRow(data)}${renderProjectsAndExperience(data)}</main></div>${renderProjectDetailModal(activeProject, activeSlug)}${renderContactModal(data.profile, isContactPopupOpen)}</div><style>
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
</style>`;
}

export function renderPortfolioLoadingState() {
  return `<div class="flex min-h-screen items-center justify-center bg-[#060606] text-[#eaddcf]"><div class="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm">Chargement du portfolio...</div></div>`;
}
