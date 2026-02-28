import { UiCard } from "@repo/ui/card";

import { portfolioData } from "./data";

function renderSocialIconButtons() {
  const itemClass =
    "inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#f48c25]/20 bg-[#f48c25]/10 text-[#f48c25] transition hover:bg-[#f48c25] hover:text-[#1a120b]";

  return `<a href="#" aria-label="LinkedIn" class="${itemClass}"><svg viewBox="0 0 24 24" class="h-4 w-4 fill-current"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7 0h3.84v2.05h.05c.53-1.01 1.84-2.07 3.78-2.07 4.04 0 4.79 2.66 4.79 6.11V23h-4v-7.76c0-1.85-.03-4.23-2.58-4.23-2.58 0-2.97 2.01-2.97 4.09V23h-4V8z"/></svg></a><a href="#" aria-label="Malt" class="${itemClass}"><span class="text-sm font-bold leading-none">m</span></a><a href="#" aria-label="GitHub" class="${itemClass}"><svg viewBox="0 0 24 24" class="h-4 w-4 fill-current"><path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.41-4.04-1.41a3.19 3.19 0 0 0-1.34-1.76c-1.1-.75.08-.73.08-.73a2.53 2.53 0 0 1 1.85 1.24 2.58 2.58 0 0 0 3.53 1 2.58 2.58 0 0 1 .77-1.62c-2.66-.3-5.47-1.33-5.47-5.9a4.61 4.61 0 0 1 1.23-3.2 4.28 4.28 0 0 1 .12-3.15s1-.32 3.3 1.22a11.42 11.42 0 0 1 6 0c2.29-1.54 3.29-1.22 3.29-1.22a4.28 4.28 0 0 1 .12 3.15 4.6 4.6 0 0 1 1.23 3.2c0 4.58-2.82 5.6-5.5 5.9a2.88 2.88 0 0 1 .83 2.23v3.3c0 .32.21.7.83.58A12 12 0 0 0 12 .5z"/></svg></a>`;
}

function renderHeader() {
  return `<header class="sticky top-0 z-40 w-full border-b border-white/5 bg-[#1a120b]/95 backdrop-blur supports-[backdrop-filter]:bg-[#1a120b]/70"><div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-4"><div class="flex items-center gap-2 text-[#eaddcf]"><span class="material-symbols-outlined text-[#f48c25]">terminal</span><span class="text-xl font-bold tracking-tight">${portfolioData.firstName.toUpperCase()}.DEV</span></div><div class="flex items-center gap-2"><a href="#" class="hidden h-9 items-center justify-center rounded-full border border-[#f48c25]/20 bg-[#f48c25]/10 px-4 text-sm font-medium text-[#f48c25] transition hover:bg-[#f48c25] hover:text-[#1a120b] sm:inline-flex"><span class="material-symbols-outlined mr-2 text-[18px]">download</span>Resume</a>${renderSocialIconButtons()}</div></div></header>`;
}

function renderHeroSection() {
  return `<section class="relative col-span-1 flex min-h-[29rem] flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br from-[#f48c25] via-[#d4740a] to-[#1a120b] p-8 md:col-span-2 lg:col-span-7"><div class="pointer-events-none absolute inset-0 overflow-hidden"><div class="hero-blob hero-blob-1"></div><div class="hero-blob hero-blob-2"></div><div class="hero-blob hero-blob-3"></div><div class="hero-blob hero-blob-4"></div><div class="hero-blob hero-blob-5"></div></div><div class="relative z-10"><div class="mb-6 inline-flex items-center rounded-full border border-black/10 bg-black/20 px-3 py-1 text-xs font-medium text-black backdrop-blur-sm"><span class="mr-2 flex h-2 w-2 rounded-full bg-black"></span>Open to work</div><h1 class="text-4xl font-black uppercase leading-[0.9] tracking-tighter text-[#1a120b] md:text-5xl lg:text-6xl">${portfolioData.heroTitle.replace(" one line", "<br/>one line")}</h1></div><div class="relative z-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end"><p class="max-w-md text-lg font-medium leading-relaxed text-[#1a120b]/80">${portfolioData.about}</p><button class="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#1a120b] text-[#f48c25] transition hover:scale-110"><span class="material-symbols-outlined">arrow_outward</span></button></div><div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div></section><style>
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

function renderProfileSection() {
  return `<section class="col-span-1 flex min-h-[29rem] flex-col gap-2 rounded-2xl border border-white/5 bg-[#110f0e] p-2 md:col-span-1 lg:col-span-3"><div class="relative h-[23rem] overflow-hidden rounded-xl bg-[#171412] md:h-[24rem] lg:h-[25rem]"><img src="${portfolioData.portraitUrl}" alt="${portfolioData.fullName}" class="absolute inset-0 h-full w-full object-cover" /><div class="absolute inset-0 bg-gradient-to-t from-[#110f0e] via-transparent to-transparent opacity-60"></div><div class="absolute bottom-4 left-4 right-4"><h3 class="text-lg font-bold text-white">${portfolioData.fullName}</h3><p class="text-sm text-[#9d8a76]">${portfolioData.city} based</p></div></div><a href="#contact" class="flex h-14 items-center justify-between rounded-xl border border-white/5 bg-[#171412] px-4 transition hover:bg-white/5"><div class="flex items-center gap-3"><span class="material-symbols-outlined text-[#9d8a76]">mail</span><span class="text-sm font-medium text-[#eaddcf]">Contact me</span></div><span class="material-symbols-outlined text-sm text-[#f48c25]">chevron_right</span></a></section>`;
}

function renderTopRow() {
  return `<section class="col-span-1 grid grid-cols-1 gap-4 md:col-span-3 md:grid-cols-3 lg:col-span-4 lg:grid-cols-10">${renderHeroSection()}${renderProfileSection()}</section>`;
}

function renderInfoRow() {
  const educationCards = portfolioData.educations
    .map((education, index) => {
      const icon = index === 0 ? "school" : "history_edu";
      const iconStyle =
        index === 0
          ? "bg-[#f48c25]/10 text-[#f48c25]"
          : "bg-[#171412] text-[#9d8a76] group-hover:text-white";

      const content = `<div class="mb-4 flex items-start justify-between"><div class="flex h-10 w-10 items-center justify-center rounded-lg ${iconStyle}"><span class="material-symbols-outlined">${icon}</span></div><span class="text-xs font-mono text-[#9d8a76]">${education.period}</span></div><h3 class="text-lg font-bold leading-tight text-[#eaddcf] transition-colors group-hover:text-[#f48c25]">${education.school}</h3><p class="mt-1 text-sm text-[#9d8a76]">${education.degree}</p>`;

      return UiCard({
        children: content,
        className:
          "group col-span-1 rounded-2xl border-white/5 bg-[#110f0e] p-6 transition-colors hover:border-[#f48c25]/30",
      });
    })
    .join("");

  const stack = portfolioData.skills
    .map((skill) => `<span class="rounded border border-white/5 bg-[#171412] px-3 py-1.5 text-xs font-medium text-[#eaddcf]">${skill.label}</span>`)
    .join("");

  const stackCard = UiCard({
    children:
      `<p class="mb-3 text-xs font-bold uppercase tracking-wider text-[#9d8a76]">Core Stack</p><div class="flex flex-wrap gap-2">${stack}</div>`,
    className: "col-span-2 rounded-2xl border-white/5 bg-[#110f0e] p-6",
  });

  return `<section class="col-span-1 grid grid-cols-2 gap-4 md:col-span-3 lg:col-span-4 md:grid-cols-4">${educationCards}${stackCard}</section>`;
}

function renderProjectCards() {
  return portfolioData.projects
    .slice(0, 2)
    .map((project) => {
      const tags = project.stack
        .slice(0, 2)
        .map((item) => `<span class="rounded bg-black/20 px-2 py-0.5 text-[10px] font-bold uppercase text-[#9d8a76]">${item}</span>`)
        .join("");

      return `<article class="group flex h-32 gap-4 rounded-2xl border border-white/5 bg-[#110f0e] p-1 pr-6 transition-all duration-300 hover:border-[#f48c25]/20 hover:bg-[#171412]"><div class="h-full w-32 shrink-0 overflow-hidden rounded-xl bg-[#171412]"><img src="${project.imageUrl}" alt="${project.name}" class="h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-100" /></div><div class="flex min-w-0 flex-1 flex-col justify-center py-2"><div class="mb-1 flex items-start justify-between"><h3 class="truncate text-lg font-bold text-[#eaddcf] transition-colors group-hover:text-[#f48c25]">${project.name}</h3><span class="material-symbols-outlined -rotate-45 text-sm text-[#9d8a76] transition-transform duration-300 group-hover:rotate-0">arrow_forward</span></div><p class="mb-3 line-clamp-2 text-sm text-[#9d8a76]">${project.description}</p><div class="flex gap-2">${tags}</div></div></article>`;
    })
    .join("");
}

function renderExperienceSection() {
  const timeline = portfolioData.experiences
    .map((experience, index) => {
      const marker =
        index === 0
          ? "bg-[#f48c25] ring-[#110f0e]"
          : "border border-[#9d8a76] bg-[#171412] ring-[#110f0e]";

      return `<div class="relative border-l border-white/10 pl-6"><span class="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full ring-4 ${marker}"></span><div class="mb-1 flex items-baseline justify-between"><h4 class="text-lg font-bold text-[#eaddcf]">${experience.role}</h4><span class="text-xs font-mono text-[#9d8a76]">${experience.period}</span></div><p class="mb-2 text-sm font-medium text-[#f48c25]">${experience.company}</p><p class="text-sm leading-relaxed text-[#9d8a76]">${experience.summary}</p></div>`;
    })
    .join("");

  const experienceCard = UiCard({
    children: timeline,
    className: "flex flex-col gap-6 rounded-2xl border-white/5 bg-[#110f0e] p-6",
  });

  const freelanceCard = `<div class="flex items-center justify-between rounded-2xl border border-white/5 bg-gradient-to-r from-[#171412] to-[#110f0e] p-5"><div><p class="font-bold text-[#eaddcf]">Freelance Availability</p><p class="text-sm text-[#9d8a76]">Accepting new projects for Q4 2026</p></div><button class="h-10 rounded-lg border border-white/10 bg-white/5 px-5 text-sm font-medium text-white transition hover:bg-white/10">Inquire</button></div>`;

  return `<section class="flex flex-col gap-4"><div class="flex items-center justify-between px-2"><h2 class="flex items-center gap-2 text-xl font-bold text-[#eaddcf]"><span class="h-2 w-2 rounded-full bg-white/20"></span>Experience</h2><span class="text-xs font-medium text-[#9d8a76]">2.5 Years Total</span></div>${experienceCard}${freelanceCard}</section>`;
}

function renderProjectsAndExperience() {
  return `<section class="col-span-1 mt-2 grid grid-cols-1 gap-4 md:col-span-3 lg:col-span-4 lg:grid-cols-2"><div class="flex flex-col gap-4"><div class="flex items-center justify-between px-2"><h2 class="flex items-center gap-2 text-xl font-bold text-[#eaddcf]"><span class="h-2 w-2 rounded-full bg-[#f48c25]"></span>Selected Projects</h2><a href="#" class="text-xs font-medium text-[#f48c25] transition hover:text-white">View all</a></div>${renderProjectCards()}</div>${renderExperienceSection()}</section>`;
}

export function renderPortfolioPage() {
  return `<div class="relative min-h-screen bg-[#060606] text-[#eaddcf]"><div class="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#120d09] via-[#080808] to-[#060606]"></div><div class="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-[#f48c25]/18 blur-3xl"></div><div class="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-[#f48c25]/8 blur-3xl"></div><div class="relative z-10">${renderHeader()}<main class="mx-auto grid w-full max-w-6xl grid-cols-1 gap-4 px-4 py-8 md:grid-cols-3 lg:grid-cols-4">${renderTopRow()}${renderInfoRow()}${renderProjectsAndExperience()}</main></div></div>`;
}
